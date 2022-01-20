
const { server, port } = require("./app")

server.listen(port, () => {
    console.log(`Servidor rodando no endereço https://localhost:${port}`)
})