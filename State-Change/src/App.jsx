import React from 'react'
import {useState} from 'react'

const App = () => {

  const [val, setval] = useState({name:"manish",isBanned:false})

  return (
    <div>
      <h1>name:{val.name}</h1>
      <h1>Banned: {val.isBanned.toString()}</h1>
      <button className={`${val.isBanned ? "bg-green-600" : " bg-red-700"}`} onClick={()=>{
        setval({...val,isBanned:!val.isBanned})
      }}>Change</button>

    </div>
  )
}

export default App