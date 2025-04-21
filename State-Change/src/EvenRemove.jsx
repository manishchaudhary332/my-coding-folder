import React from 'react'
import {useState} from 'react'

const EvenRemove = () => {
    const [val, setval] = useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div className='mt-[100px] ml-5'>
        <h1>Remove All Even Numbers</h1>
        {val.map((item)=><h1>{item}</h1>)}
        <button onClick={()=>{
            setval(()=>{
                return val.filter((item)=>item%2 !== 0)
            })
        }} className='px-2 py-2 bg-gray-600 rounded'>Remove</button>
    </div>
  )
}

export default EvenRemove