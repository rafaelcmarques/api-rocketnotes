const { Router } = require("express")

const SessionsControllers = require("../controllers/SessionsController")
const sessionsController = new SessionsControllers()

const sessionRoutes = Router()
sessionRoutes.post("/", sessionsController.create)

module.exports = sessionRoutes
