
import { generateToken } from "../../animation/src/utilities/jwtToken.js"
import { User } from "../modals/user.modals.js"
import bcrypt from "bcryptjs";
// export const UserController = async (req, res) => {
//     const { name, email, phone,role,password } = req.body
//     console.log("Controller visit done.......")
//     const user = new User({ name, email, phone,role,password })
//     console.log("DB visit done.......")
//     await user.save()
//     generateToken(user, "User registered successfully.", 201, res);
// }


export const Signup = async (req, res) => {
  try {
    const { name, email, phone, role, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create user (password will auto-hash via pre save)
    const user = await User.create({
      name,
      email,
      phone,
      role,
      password,
    });

    // generate token
    const token = user.generateJsonWebToken();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate token
    const token = user.generateJsonWebToken();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetRole = async (req, res) => {
  console.log("UserRole DB visit done.......");

  return res.status(200).json({
    success: true,
    message: "Successfully done",
    newrole: { role: req.user.role },
  });
};


export const GetUser = async (req, res) => {
    const allUsers = await User.find();
    return res.status(200).json({
    success: true,
    message: "ALl users are comming",
    allUsers
  });
}

export const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};