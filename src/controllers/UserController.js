const fs = require('fs')


const users = require('../services/database/users.json')

class UserController {
    async login(req, res) {
        const { username, password } = req.body
    
        console.log("login page")
        return res.send("login page")
    }
    async signup(req, res) {
        const { username, password } = req.body
    
        let newUser = { username: username, password: password}
    
        users.push(newUser)
    
        await fs.writeFile("users.json", JSON.stringify(users), err => {
            if (err) throw err; 
    
            res.send("Usuário cadastrado com sucesso!")
        })
    }
}


module.exports = new UserController()