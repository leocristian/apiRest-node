const fs = require('fs')

const notes = require("../../notes.json")

const readAll = async (req, res) => {
    fs.readFile("notes.json", (err, data) => {
        if (err) throw err

        const allNotes = JSON.parse(data)

        res.json(allNotes)
    })
}
const create = async (req, res) => {

    const { title, message } = req.body

    let newNote = { tile: title, message: message }

    notes.push(newNote)

    await fs.writeFile("notes.json", JSON.stringify(notes), err => {
        if (err) throw err; 

        res.send("Nota cadastrada com sucesso!")
    })
}


module.exports = { readAll, create }