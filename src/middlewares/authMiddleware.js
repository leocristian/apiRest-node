const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).send("User not authorized")
    }

    const token = authorization.replace("Bearer", "").trim()

    try {
        const data = await jwt.verify(token, "secret", (err) => {
            if(err) return "Session expired"
        })
            
        req.username = data.username

        next()
    } catch (error) {

        return res.status(401).send("User not authorized!")
    }
}

module.exports = authMiddleware