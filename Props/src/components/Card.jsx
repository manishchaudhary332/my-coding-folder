import React from 'react'

const Card = ({img,name,Profession,friend,HandleFriend,index}) => {
  return (
    <div className='w-[250px] h-[350px] bg-gray-600 m-4 rounded-lg shadow-lg shadow-black overflow-hidden'>
        <img className='w-full object-cover   h-[250px] object-top' src={img} alt="" />
        <h1 className='text-[18px] text-white'>Name: {name}</h1>
        <h1 className='text-white'>Profession: {Profession}</h1>
        <button onClick={()=>
            HandleFriend(index)
            } 
            className='px-3 py-1 rounded bg-green-400 mt-3 w-full text-[20px] hover:bg-violet-900 hover:text-white'>{friend? "Add Friend":"Remove Friend"}</button>

            
    </div>
    
  )
}

export default Card