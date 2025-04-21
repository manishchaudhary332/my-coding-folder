import React from 'react'
import { useState } from 'react'

const Controlled = () => {
  const [val, setval] = useState({name:"",email:""})

  function handler(e){
    e.preventDefault()
    console.log(val.name);
    console.log(val.email);
    
    
  }

  return (
    <div className='mt-[200px]'>
        <form action="" onSubmit={handler}>
          <input 
           onChange={(e)=>{
           setval({...val,name:e.target.value})
            
          }} type="text" name='name' placeholder='Enter name' />

          <input 
           onChange={(e)=>{
           setval({...val,email:e.target.value})
            
          }} type="text" name='email' placeholder='Enter email' />
          <input type="submit" />
        </form>
    </div>
  )
}

export default Controlled