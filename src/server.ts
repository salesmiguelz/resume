import Fastify from "fastify";
import 'dotenv/config'

const fastify = Fastify();

fastify.get("/test", (request, reply) => {
    return process.env.GITHUB_TOKEN
})

fastify.listen({
    port: 3000
})