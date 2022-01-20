const express = require('express')
const bodyparser = require('body-parser')
const server = express()
const port = 8000

const userRouter = require("./routes/user")
const noteRouter = require("./routes/note")

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))

server.use("/api", userRouter)
server.use("/api", noteRouter)

module.exports = { server, port }