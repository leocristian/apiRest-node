const fs = require('fs')
const fileHandle = require("fs/promises")
const notes = require("../services/database/notes.json")

class NoteController {
    async getAll(req, res) {

        const notes = JSON.parse(await fs.readFileSync("notes.json")) 


        if(notes.length == 0) return res.status(404).send("Notes not found")

        return res.status(200).send(notes)
    }
    async create(req, res) {

        const { title, message } = req.body
    
        let newNote = { tile: title, message: message }
    
        await notes.push(newNote)
    
        await fs.writeFile("notes.json", JSON.stringify(notes), err => {
            if (err) throw err; 
    
            return res.status(200).send("Nota cadastrada com sucesso!")
        })
    }
}


module.exports = new NoteController()