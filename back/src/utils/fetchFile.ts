import axios from "axios";

export async function fetchFile(owner: string, repo: string, path: string) {
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
