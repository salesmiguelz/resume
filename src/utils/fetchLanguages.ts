import axios from "axios";

export async function fetchLanguages(owner: string, repo: string): Promise<string[]> {
    try {
        const res = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/languages`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        return Object.keys(res.data);
    } catch (error: any) {
        console.error(`Erro ao buscar linguagens de ${repo}:`, error.message);
        return [];
    }
}