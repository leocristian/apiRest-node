
const express = require("express")

const router = express.Router()

const noteController = require("../controllers/NoteController")

router.get("/notes", noteController.getAll)
// router.get("/notes/:id", noteController.getById)
router.post("/notes", noteController.create)
// router.put("/notes/:id", noteController.edit)
// router.delete("/notes/:id", noteController.removeById)

module.exports = router
