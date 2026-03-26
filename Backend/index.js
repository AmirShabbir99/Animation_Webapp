import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Userouter from "./routes/user.routes.js"
import cors from "cors"
const app = express()
dotenv.config();
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/",Userouter)
console.log("Route visit done.......")
// Corrected connection method and promise handling
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.listen(8000, () => {
  console.log("Backend running on port 8000")
})
