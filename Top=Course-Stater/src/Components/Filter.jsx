import React from 'react'


const categories = ["All","Web Dev", "Security","Design"]


const Filter = ({setcategory}) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-6'>
        {categories.map((cat)=>(
            <button
            key={cat}
             onClick={()=>{
                setcategory(cat)
            }} >{cat}</button>
        ))}
    </div>
  )
}

export default Filter