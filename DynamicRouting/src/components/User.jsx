import React from 'react'
import {Link, useParams} from "react-router-dom"
import UserDetails from './UserDetails'

const User = () => {
  
  
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col '>
      <h1 className='text-[200px] text-red-400'>User</h1>

      <div className='flex flex-col'>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400" to="/user/john" >John</Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400" to="/user/ayush" >Ayush</Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400" to="/user/anubav" >Anubav</Link>
      </div>

      


    </div>
  )
}

export default User