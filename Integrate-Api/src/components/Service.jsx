import React, { useEffect } from 'react'

const Service = () => {
    useEffect(()=>{
        console.log("service component is created");

        return ()=>{
            console.log("service component is delete");
            
        }
        
    })
  return (
    <div>service</div>
  )
}

export default Service