import React from 'react'
import { useState } from 'react'

const TrueFalse = () => {
    const [val, setval] = useState(false)
  return (
    <div className='mt-[100px] ml-5'>
        <h1>True (bahar jao)  False (mt jao)</h1>
        {val == true ? "Bahar Jao" : "Mat Jao"}
       <br /> <button className='px-2 py-1 rounded bg-gray-500 mt-5 ' onClick={()=>{
            setval(()=>{
                return !val
            })
        }}>Change</button>
    </div>
  )
}

export default TrueFalse