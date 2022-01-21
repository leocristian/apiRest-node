
const { app, port } = require("./app")

app.listen(port, () => {
    console.log(`Servidor rodando no endereço https://localhost:${port}`)
})