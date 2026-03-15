import axios from "axios";
import { useForm } from "react-hook-form";

function LoginPage() {
const { register,handleSubmit } = useForm();
const onSubmit=async(data:any)=>{
await axios.post("http://localhost:8000/",data)
}
  return (
    <>
    <div className="absolute inset-0 flex items-center justify-center  bg-black/50 h-full w-full z-9999">
    <div className="flex w-[40%] flex-col justify-centers items-center p-10 bg-black text-white rounded-xl ">
 <form onSubmit={handleSubmit(onSubmit)}>
   <div className="p-2 bg-black ">
    <div className="flex  flex-col gap-5 bg-black">
        <div className=" text-center bg-purple-400 rounded-md p-2">
        Login page
        </div>
        <div className="flex gap-2">
        <input type="text" className="border rounded-xl p-2" {...register("name", { required: true })}placeholder="name"/>
        <input type="text" className="border rounded-xl p-2" {...register("email", { required: true })} placeholder="email"/>
        </div>
        <input type="number" className="border rounded-xl p-2" {...register("phone", { required: true })} placeholder="phone"/>
        <select className="border rounded-xl p-2 text-white" {...register("role", { required: true })} id="">
            <option value="User" className="border rounded-xl p-2 text-black">User</option>
            <option value="SuperAdmin" className="border rounded-xl p-2 text-black">Super Admin</option>
        </select>
         <input type="password" className="border rounded-xl p-2" {...register("password", { required: true })} placeholder="passcode"/>
        <button type="submit" className="border rounded-xl p-2 hover:bg-purple-400 ">Submit</button>
    </div>
    </div>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default LoginPage