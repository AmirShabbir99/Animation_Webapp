import { useEffect, useState } from "react"
import LoginPage from "./LoginPage"
import AdminPanel from "./AdminPanel"
import axios from "axios"
import ClientPanel from "./ClientPanel"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

const App = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/getrole");
      setRole(res.data.newrole[0].role);
      console.log("Role:", res.data.newrole[0]);
    };
    fetchData();
  }, []);

  if (role === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={role == "SuperAdmin" ? <AdminPanel /> : <ClientPanel />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="" element={}/> */}
        </Routes>
      </BrowserRouter>


      {/*    <div className="relative flex justify-center z-10  items-center h-screen w-full">
     <button 
        onClick={() => setstate(true)} 
        className="bg-red-600 p-4 rounded-xl text-white hover:bg-red-700 transition-colors"
      >
        Open Modal
      </button>

    {state && (
  <div className="fixed inset-0 flex justify-end items-center bg-black/50 z-50">
    <div className="animate-fadeUp h-[70vh] w-[40vh]  transform translate-[-100px] animation[3s_linear_3000] bg-amber-300 rounded-2xl shadow-2xl flex flex-col p-6">
      <button
        onClick={() => setstate(false)}
        className="mt-auto bg-black text-white p-2 rounded-lg"
      >
        Close
      </button>
    </div>
  </div>
)}
     </div> */}
    </>

  )
}

export default App