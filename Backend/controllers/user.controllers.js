import { generateToken } from "../../animation/src/utilities/jwtToken.js"
import { User } from "../modals/user.modals.js"

export const UserController = async (req, res) => {
    const { name, email, phone,role,password } = req.body
    console.log("Controller visit done.......")
    const user = new User({ name, email, phone,role,password })
    console.log("DB visit done.......")
    await user.save()
    return res.status(200).json({
    success: true,
    message: "Successfully done",
  });

    generateToken(user, "User registered successfully.", 201, res);
}