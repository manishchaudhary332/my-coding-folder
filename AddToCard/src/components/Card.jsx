import React from 'react'

const Card = ({img,name,added,click,index}) => {
  return (
    <div className="w-[200px] bg-white shadow-lg rounded-2xl overflow-hidden">
    <img src={img} alt='' className="w-full h-48 object-cover" />
    <h1 className='text-center'>{name}</h1>
    <button onClick={()=>click(index)} className={`${added ? "bg-green-500": " bg-red-500"} text-white p-2 rounded ml-[50px] cursor-pointer`}>{added ? "Added": "Add To Card" }</button>
  </div>
  )
}

export default Card