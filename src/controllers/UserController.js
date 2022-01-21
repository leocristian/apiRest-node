const fs = require('fs')
const jwt = require("jsonwebtoken")

const users = require('../services/database/users.json')

class UserController {
    async login(req, res) {
        const { username, password } = req.body
        
        const users = JSON.parse(await fs.readFileSync("users.json"))

        const user = users.find(item => item.username === username)

        const token = await jwt.sign({ username: user.username }, "secret", {expiresIn: "1min"})

        return res.status(200).send({ user, token })
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