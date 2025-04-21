import React from 'react'
import {Link, Route, Routes}  from "react-router-dom"
import Home from './components/Home'
import Show from './components/show'
import Service from './components/service'


const App = () => {



  


  return (
    <>
        <div className='pt-5 '>
          <nav className='flex gap-5 justify-around w-[300px] mx-auto'>
            <Link to="/">Home</Link>
            <Link to="/show">Show</Link>
            <Link to="/service">Service</Link>
          </nav>
          <hr />

          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/show' element={<Show/>} /> 
              <Route path='/service' element={<Service/>} /> 
          </Routes>

        </div>
    
   </>
  )
}

export default App