
const express = require("express")

const router = express.Router()

const noteController = require("../controllers/NoteController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/notes", authMiddleware, noteController.getAll)
// router.get("/notes/:id", noteController.getById)
router.post("/notes", authMiddleware, noteController.create)
// router.put("/notes/:id", noteController.edit)
// router.delete("/notes/:id", noteController.removeById)

module.exports = router
