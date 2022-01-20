const fs = require('fs')

const notes = require("../services/database/notes.json")

class NoteController {
    async getAll(req, res) {
        fs.readFile("notes.json", (err, data) => {
            if (err) throw err
    
            const allNotes = JSON.parse(data)
    
            res.json(allNotes)
        })
    }
    async create(req, res) {

        const { title, message } = req.body
    
        let newNote = { tile: title, message: message }
    
        notes.push(newNote)
    
        await fs.writeFile("notes.json", JSON.stringify(notes), err => {
            if (err) throw err; 
    
            res.send("Nota cadastrada com sucesso!")
        })
    }
}


module.exports = new NoteController()