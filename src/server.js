require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const server = express()
const port = 8000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const User = require("./models/User")
const Note = require("./models/Note")

const users = []
const notes = []

users.push(new User("leo", "1234", 1))

notes.push(new Note("nota 1", "mensagem da nota 1", 1))
notes.push(new Note("nota 2", "mensagem da nota 2", 1))
notes.push(new Note("nota 3", "mensagem da nota 3", 1))

server.get("/notes", authenticateToken, (req, res) => {
    return res.json(notes.filter(note => note.idUser === req.user.id))
})

server.post('/notes', (req, res) => {
    const { title, message } = req.body

    console.log(`Nova anotação: "${title}: ${message}" `)

    const newNote = new Note(title, message, 1)
    notes.push(newNote)

})

server.post("/login", (req, res) => {
    //Implement JWT authentication
    const { username, password, id } = req.body
    const user = { name: username, password: password, id: id}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null) {
        return res.sendStatus(401) // No token sent
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403) // No valid token
        }
        req.user = user
        next()
    })
}

server.listen(port, () => {
    console.log(`Servidor rodando no endereço https://localhost:${port}`)
})