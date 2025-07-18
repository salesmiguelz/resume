import Fastify from "fastify";
import axios from "axios";
import 'dotenv/config';
import cors from '@fastify/cors';
import { fetchLanguages } from "./utils/fetchLanguages";
import { extractTechnologies } from "./utils/extractTechnologies";

const fastify = Fastify();

fastify.register(cors, {
    origin: true
});

fastify.get("/users/:username", async (request, reply) => {
    const { username } = request.params as { username: string };
    try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        });

        const user = userRes.data;

        const reposRes = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        const repos = reposRes.data;
        const repoResults = await Promise.all(
            repos.map(async (repo: any) => {
                const { mainTechs, allDeps, source } = await extractTechnologies(username, repo.name);
                const languages = await fetchLanguages(username, repo.name);
                return {
                    repo: repo.name,
                    description: repo.description,
                    createdAt: repo.created_at,
                    updatedAt: repo.updated_at,
                    url: repo.html_url,
                    mainTechs,
                    allDeps,
                    languages,
                    source
                };
            })
        );

        return {
            user: {
                login: user.login,
                name: user.name,
                avatar_url: user.avatar_url,
                company: user.company,
                bio: user.bio,
                public_repos: user.public_repos,
                followers: user.followers,
                following: user.following,
                html_url: user.html_url
            },
            repos: repoResults
        };
    } catch (error: any) {
        console.error("Erro geral:", error.message);
        return reply.status(500).send({ error: "Erro ao buscar dados do GitHub." });
    }
});

fastify.listen({ port: 3000 }).then(() => {
    console.log("🚀 Server running at http://localhost:3000");
});
