import React from 'react'

const Navbar = ({data}) => {
  return (
    <nav className="bg-gray-200 shadow-md p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-xl font-bold text-gray-800">Brand</a>
      
      <div className="hidden md:flex space-x-2 bg-green-700 text-white p-2 rounded-xl">
          <h1 className="text-[20px]">fevrate</h1>
          <h2 className="text-[22px]">{data.filter((item)=>{
            return item.added
          }).length}</h2>
      </div>
      
      <div className="md:hidden">
        
      </div>
    </div>

    
  </nav>
  )
}

export default Navbar