import { Router } from "express"
import { DeleteUser, GetRole, GetUser, UserController } from "../controllers/user.controllers.js"

const router = Router()

router.post("/", UserController)
router.get("/getrole", GetRole)
router.get("/allusers", GetUser)
router.delete("/deleteuser/:id", DeleteUser)

export default router