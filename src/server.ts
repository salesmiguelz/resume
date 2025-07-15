import Fastify from "fastify";
import axios from "axios";
import 'dotenv/config';

const fastify = Fastify();


async function extractTechnologies(owner: string, repo: string) {
    const packageJsonStr = await fetchFile(owner, repo, "package.json");
    if (packageJsonStr) {
        try {
            const pkg = JSON.parse(packageJsonStr);
            const deps = Object.keys(pkg.dependencies || {});
            const devDeps = Object.keys(pkg.devDependencies || {});
            const allDeps = [...new Set([...deps, ...devDeps])];
            return { techs: allDeps, source: "package.json" };
        } catch (err) {
            console.error(`Erro ao parsear package.json de ${repo}`);
        }
    }

    const yarnLockStr = await fetchFile(owner, repo, "yarn.lock");
    if (yarnLockStr) {
        const techs = yarnLockStr
            .split('\n')
            .filter(line => line.startsWith('"') || line.startsWith('@'))
            .map(line => line.split(/["@]/)[1])
            .filter(Boolean);
        return { techs: [...new Set(techs)], source: "yarn.lock" };
    }

    const pnpmStr = await fetchFile(owner, repo, "pnpm-lock.yaml");
    if (pnpmStr) {
        const techs = pnpmStr
            .split('\n')
            .filter(line => line.startsWith('  ') && line.includes('@'))
            .map(line => line.trim().split(':')[0].split('@')[0])
            .filter(Boolean);
        return { techs: [...new Set(techs)], source: "pnpm-lock.yaml" };
    }

    return { techs: [], source: null };
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
                const { techs, source } = await extractTechnologies(username, repo.name);
                return {
                    repo: repo.name,
                    techs,
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


fastify.listen({ port: 3000 }).then(() => {
    console.log("Fastify rodando em http://localhost:3000");
});
