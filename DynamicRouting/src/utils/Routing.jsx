import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UserDetails from '../components/UserDetails'

const Routing = () => {
  return (
    <>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:name' element={<UserDetails/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    
    </>
  )
}

export default Routing