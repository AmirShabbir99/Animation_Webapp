import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userschema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    phone: {
        type:Number,
        required:true,
    },
    role: {
        type:String,
        enum:["SuperAdmin","User"],
        required:true,
    },
     password: {
        type:String,
        required:true,
    },
})


userschema.pre("save",async function(next){
  if (!this.isModified("password")) {
    next();
  }

 this.password = await bcrypt.hash(this.password, 8);
});
// userschema.methods.comparePassword=async function(entarPassword){
//    return await bcrypt.compare(enterPassword,this.password)
// }
export const User = mongoose.model("user", userschema)
