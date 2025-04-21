import React from 'react'
import { useState } from 'react'

const App = () => {
  const [val, setval] = useState(false)
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative'> 
    <div className='h-[350px] w-[250px] relative overflow-hidden rounded-xl '>
    <img className={`h-[300px] w-[250px] absolute rounded-xl transition-transform duration-300 ${val === false? "-translate-x-[0%]":  "-translate-x-[100%]"}`} src="https://plus.unsplash.com/premium_photo-1739532090782-a5cd0445178d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D" alt="" />
    <img className={`h-[300px] w-[250px] absolute rounded-xl transition-transform duration-300 ${val === true? "-translate-x-[0%]":  "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1734682648300-08be86af722d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjR8fHxlbnwwfHx8fHw%3D" alt="" />
    <button onClick={()=>{
      setval(()=>{
        return !val
      })
    }} className='mt-[320px] ml-[90px] px-3 py-1 bg-red-400 rounded text-white'>Change</button>
    </div>

    </div>
  )
}

export default App