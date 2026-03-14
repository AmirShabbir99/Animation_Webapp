import { Router } from "express"
import { UserController } from "../controllers/user.controllers.js"

const router = Router()

router.post("/", UserController)

export default router