import React from 'react'
import {useState} from 'react'

const AddNumber = () => {
    const [val, setval] = useState([1,2,3,4,5])
  return (
    <div className='mt-[100px] ml-5'>
        <h1>Add new number </h1>
        {val.map((item)=><h1>{item}</h1>)}
        <button className='px-2 py-1 rounded bg-gray-600' onClick={()=>{
            setval(()=>{
                return [...val,val.length+1]
            })
        }}>Add Num</button>
    </div>
  )
}

export default AddNumber