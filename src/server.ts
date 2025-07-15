import Fastify from "fastify";
import axios from "axios";
import 'dotenv/config';

const fastify = Fastify();

const MAIN_TECHS = [
    "react", "next", "vue", "nuxt", "svelte",
    "angular", "vite", "tailwindcss",
    "node", "express", "nestjs", "fastify",
    "laravel", "django", "flask", "spring",
    "typescript", "javascript", "php", "python",
    "react-native", "expo",
    "prisma", "sequelize", "typeorm"
];

async function fetchFile(owner: string, repo: string, path: string) {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
        return content;
    } catch (error: any) {
        if (error.response?.status === 404) return null;
        console.error(`Erro ao buscar ${path} de ${repo}:`, error.message);
        return null;
    }
}

async function extractTechnologies(owner: string, repo: string) {
    let allDeps: string[] = [];

    // 1. package.json
    const packageJsonStr = await fetchFile(owner, repo, "package.json");
    if (packageJsonStr) {
        try {
            const pkg = JSON.parse(packageJsonStr);
            const deps = Object.keys(pkg.dependencies || {});
            const devDeps = Object.keys(pkg.devDependencies || {});
            allDeps = [...new Set([...deps, ...devDeps])];
            const mainTechs = allDeps.filter(dep =>
                MAIN_TECHS.includes(dep.toLowerCase())
            );
            return { mainTechs, allDeps, source: "package.json" };
        } catch (err) {
            console.error(`Erro ao parsear package.json de ${repo}`);
        }
    }

    // 2. yarn.lock (bem simplificado)
    const yarnLockStr = await fetchFile(owner, repo, "yarn.lock");
    if (yarnLockStr) {
        const matches = yarnLockStr.match(/"([^@"]+?)@/g) || [];
        allDeps = [...new Set(matches.map(m => m.replace(/"|@/g, '')))];
        const mainTechs = allDeps.filter(dep =>
            MAIN_TECHS.includes(dep.toLowerCase())
        );
        return { mainTechs, allDeps, source: "yarn.lock" };
    }

    // 3. pnpm-lock.yaml (bem simplificado)
    const pnpmStr = await fetchFile(owner, repo, "pnpm-lock.yaml");
    if (pnpmStr) {
        const matches = pnpmStr.match(/^\s+(.+?)@/gm) || [];
        allDeps = [...new Set(matches.map(m => m.trim().split('@')[0]))];
        const mainTechs = allDeps.filter(dep =>
            MAIN_TECHS.includes(dep.toLowerCase())
        );
        return { mainTechs, allDeps, source: "pnpm-lock.yaml" };
    }

    return { mainTechs: [], allDeps: [], source: null };
}

fastify.get("/techs/:username", async (request, reply) => {
    const { username } = request.params as { username: string };

    try {
        const reposRes = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        const repos = reposRes.data;

        const results = await Promise.all(
            repos.map(async (repo: any) => {
                const { mainTechs, allDeps, source } = await extractTechnologies(username, repo.name);
                return {
                    repo: repo.name,
                    description: repo.description,
                    mainTechs,
                    allDeps,
                    source
                };
            })
        );

        return results;
    } catch (error: any) {
        console.error("Erro geral:", error.message);
        return reply.status(500).send({ error: "Erro ao buscar tecnologias." });
    }
});

fastify.listen({ port: 3000 }).then(() => {
    console.log("Fastify rodando em http://localhost:3000");
});
