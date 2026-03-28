import { Router } from "express"
import { DeleteUser, GetRole, GetUser, UserController } from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middleware/Auth.js"

const router = Router()

router.post("/login", UserController)
router.get("/getrole", GetRole)
router.get("/allusers",isAuthenticated, GetUser)
router.delete("/deleteuser/:id",isAuthenticated, DeleteUser)

export default router