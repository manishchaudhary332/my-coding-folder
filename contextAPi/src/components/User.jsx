import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'


const User = () => {
   const {users} =  useContext(UserContext)
  return (
    <div className='p-10'>
        <h1 className='text-2xl'>User List</h1>
        <div className='mt-5 flex gap-5 flex-col w-[400px]'>
            {users.map(u=> <Link key={u.id} to={`/user/${u.id}`} className='bg-red-300 p-2 rounded '>{u.name}</Link>)}
        
            
        </div>
    </div>
  )
}

export default User