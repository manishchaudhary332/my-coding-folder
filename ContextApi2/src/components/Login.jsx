import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext.js'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setuser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username, password})    
    }


  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='UserName' />

        <input 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='Password' />
        <input onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default Login