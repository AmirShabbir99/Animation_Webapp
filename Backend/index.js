import express from "express"
import mongoose from "mongoose"
import Userouter from "./routes/user.routes.js"
import cors from "cors"
const app = express()
const MONGOURI = "mongodb://127.0.0.1:27017/newEra"
app.use(express.json())
app.use(cors())
app.use("/",Userouter)
console.log("Route visit done.......")
// Corrected connection method and promise handling
mongoose.connect(MONGOURI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.listen(8000, () => {
  console.log("Backend running on port 8000")
})
