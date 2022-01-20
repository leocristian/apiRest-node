const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 8000

const userRouter = require("./routes/user")
const noteRouter = require("./routes/note")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/api", userRouter)
app.use("/api", noteRouter)

module.exports = { app, port }