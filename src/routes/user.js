const router = require("./router")

const userController = require("../controllers/UserController")

router.post("/user", userController.login)
router.post("/user", userController.signup)

module.exports = router