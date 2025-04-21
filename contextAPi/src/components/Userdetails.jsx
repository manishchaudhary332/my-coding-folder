import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()
 const {users} =  useContext(UserContext)
 console.log(users[id]);
 
  return (
    <div className='w-[200px] p-3'>
      <h1 className='text-5xl text-red-500 rounded '>{users[id].name}</h1>
      <div className='text-3xl text-black '>{users[id].city}</div>
      <button onClick={()=>{
        return navigate(-1)
      }} className='bg-green-600 rounded px-3 py-1 '>Go Back</button>
    </div>
  )
}

export default Userdetails