const { app } = require("../app")

const request = require("supertest")

describe("Aplication tests", () => {
    it("Should return 404 error", async () => {
        const response = await request(app).get("/api/notes")

        expect(response.status).toBe(404)
    })
    it("Should return 200", async () => {
        const newNote = {
            title: "Nova nota",
            message: "nova nota criada"
        }

        const response = await request(app).post("/api/notes").send(newNote)

        expect(response.status).toBe(200)
    })
})