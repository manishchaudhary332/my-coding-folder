import React from 'react'
import {useState} from 'react'

const NumberRemove = () => {

    const [val, setval] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <div className='mt-[100px] ml-5'>
        <h1>Remove last number when clicked butten</h1>
        {val.map((item)=><h1>{item}</h1>)}
        <button onClick={()=>{
            setval(()=>{
                // return val.filter((item)=>item!==val[val.length-1])
                // return val.slice(0,val.length-1)
                // return val.slice(0,-1)
                return val.filter((item,index)=>index!==val.length-1)
                
                
            })
        }} className='px-2 py-2 bg-gray-600 rounded'>Remove</button>
    </div>
  )
}

export default NumberRemove