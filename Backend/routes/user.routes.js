import { Router } from "express"
import { GetRole, GetUser, UserController } from "../controllers/user.controllers.js"

const router = Router()

router.post("/", UserController)
router.get("/", GetRole)
router.get("/allusers", GetUser)


export default router