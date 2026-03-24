import axios from "axios";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/allusers");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a044ff] to-[#6a3093] p-6">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Admin Panel
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white">
            <thead>
              <tr className="bg-white/20 text-lg">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Password</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-white/20 hover:bg-white/10 transition"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-400/20 text-green-300">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="text-red-300">••••••••</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;