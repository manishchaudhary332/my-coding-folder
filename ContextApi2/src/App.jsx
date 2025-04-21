import React from 'react'
import UserContextprovider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextprovider>
      <Login/>
      <Profile/>


    </UserContextprovider>
  )
}

export default App