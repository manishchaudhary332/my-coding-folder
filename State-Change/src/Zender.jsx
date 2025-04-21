import React from 'react'
import {useState} from 'react'

const Zender = () => {
    const [val, setval] = useState({name:"manish",age:24})
  return (
    <div>

        <button className='mt-[200px] bg-gray-400 px-3 py-1 rounded' onClick={()=>{
               setval({...val,zender:"male"})
               console.log(val);
      }}>Add Zender</button>

    </div>
  )
}

export default Zender