const express = require('express')
const bodyparser = require('body-parser')
const server = express()
const port = 8000

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))

const notesController = require('./controllers/notesController')

server.get('/notes', notesController.readAll)
server.post('/notes', notesController.create)

server.listen(port, () => {
    console.log(`Servidor rodando no endereço https://localhost:${port}`)
})