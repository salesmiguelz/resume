import { fetchFile } from "./fetchFile";

const MAIN_TECHS = [
    "react", "next", "vue", "nuxt", "svelte",
    "angular", "vite", "tailwindcss",
    "node", "express", "nestjs", "fastify",
    "laravel", "django", "flask", "spring",
    "react-native", "expo",
    "prisma", "sequelize", "typeorm"
];

export async function extractTechnologies(owner: string, repo: string) {
    let allDeps: string[] = [];

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

    const yarnLockStr = await fetchFile(owner, repo, "yarn.lock");
    if (yarnLockStr) {
        const matches = yarnLockStr.match(/"([^@"]+?)@/g) || [];
        allDeps = [...new Set(matches.map(m => m.replace(/"|@/g, '')))];
        const mainTechs = allDeps.filter(dep =>
            MAIN_TECHS.includes(dep.toLowerCase())
        );
        return { mainTechs, allDeps, source: "yarn.lock" };
    }

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