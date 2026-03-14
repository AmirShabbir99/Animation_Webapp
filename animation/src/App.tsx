import { useState } from "react"
import LoginPage from "./LoginPage"

const App = () => {
  const [state,setstate]=useState(false)
  return (
    <>
    <LoginPage/>
    <div className="relative flex justify-center z-10  items-center h-screen w-full">
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
     </div>
    </>
   
  )
}

export default App