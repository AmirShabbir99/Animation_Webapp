import { Router } from "express"
import { GetRole, UserController } from "../controllers/user.controllers.js"

const router = Router()

router.post("/", UserController)
router.get("/", GetRole)

export default router