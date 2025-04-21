import React from 'react'
import {useState} from 'react'

const ThreeRemove = () => {
    const [val, setval] = useState([1,2,3,4,5,6,])
  return (
    <div className='mt-[100px] ml-5'>
        <h1>Remove To 3</h1>


        {val.map((item)=>{
            return <h1>{item}</h1>
        })}
        <button onClick={()=>{
            setval(()=>{
                return val.filter((item,index)=>index!==2)
            })
        }} className='px-2 py-2 bg-gray-600 rounded'>remove</button>
    </div>
  )
}

export default ThreeRemove