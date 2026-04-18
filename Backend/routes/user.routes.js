import { Router } from "express"
import { DeleteUser, GetRole, GetUser, Signup,Login } from "../controllers/user.controllers.js"
import { isAuthenticated, isAuthorized } from "../middleware/Auth.js"

const router = Router()

router.post("/signup", Signup);
router.post("/login", Login);
// router.get("/getrole",isAuthenticated,isAuthorized("User"), GetRole)
router.get("/allusers",isAuthenticated,isAuthorized("SuperAdmin"), GetUser)
router.delete("/deleteuser/:id",isAuthenticated,isAuthorized("SuperAdmin"), DeleteUser)

export default router