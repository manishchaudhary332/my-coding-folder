



import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    let {name} = useParams()

   let navigate =  useNavigate()
   const GoBackHandler = ()=>{
    navigate=('/user')
   }
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        <img src="https://images.unsplash.com/photo-1742201835826-3b607fa4e8b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D" alt="" className="w-full h-[400px] object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, fugiat!</p>
        <a href="/user">
        <button onClick={GoBackHandler} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Go Back
        </button>
        </a>
      </div>
    </div>
  );
};

export default UserDetails;