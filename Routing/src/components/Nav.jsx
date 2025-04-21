import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <>
    <nav className='flex mt-5 w-full bg-gray-500 p-2 text-white justify-around text-2xl'>
        {/* STyle ka use kr ke color change  */}
      <NavLink style={(e)=>{
        return{
            color: e.isActive ? "red": ""
        }
      }} to="/"> Home </NavLink>

      {/* className ka use kr ke  color change */}

      <NavLink className={(e)=>{
        return[
            e.isActive? "text-red-400":"",
            e.isActive? "text-bold":""
      ].join(" ")
      }} to="/user"> User</NavLink>

      {/*  */}

      <NavLink style={(e)=>{
        return{
            color: e.isActive ? "tomato": ""
        }
      }} to="/about"> about </NavLink>
    </nav>
    </>
  )
}

export default Nav