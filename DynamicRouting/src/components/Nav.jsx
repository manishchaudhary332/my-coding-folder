import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <>
    <nav className='w-full bg-gray-200 flex justify-around text-2xl'>
    <NavLink style={(e)=>{
      return{
        color:e.isActive?"blue":""
      }
    }} to="/">Home</NavLink>

    <NavLink style={(e)=>{
      return{
        color:e.isActive?"blue":""
      }
    }} to="/user">user</NavLink>

    <NavLink style={(e)=>{
      return{
        color:e.isActive?"blue":""
      }
    }} to="/about">about</NavLink>
    </nav>
    </>
  )
}

export default Nav