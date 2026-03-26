import axios from "axios";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

const AdminPanel = () => {
    const [Data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8000/allusers");
            setData(res.data.allUsers);
            console.log("Res.data :", res.data);
        };
        fetchData();
    }, []);

     const DeleteUserData = async (id:any) => {
            await axios.delete(`http://localhost:8000/deleteuser/${id}`);
            const filterData=Data.filter((item:any)=>item._id!==id)
            setData(filterData);
        };
    return (
        <>
            <h1>Admin Panel</h1>

            <div className="grid grid-cols-4 gap-4 w-full">
                {Data.map((user: any) => (
                    <div key={user._id} className="border p-2 rounded">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <button className="hover:bg-red-400 cursor-pointer" onClick={()=>DeleteUserData(user._id)}><Trash className="text-red-500 "/></button>
                        
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminPanel;