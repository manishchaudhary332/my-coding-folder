import React from 'react'

const Card = () => {

    let data =[{
        name:'Anisha chaudhary',
        img:'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus reiciendis voluptas modi?'
    },
    {
        name:'priya chaudhary',
        img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus reiciendis voluptas modi?'
    },
    {
        name:'Monika chaudhary',
        img:'https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus reiciendis voluptas modi?'
    },
    {
        name:'Rhoni chaudhary',
        img:'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzfGVufDB8fDB8fHww',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus reiciendis voluptas modi?'
    }

]



  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-300 gap-4'>
      
      {data.map((item)=>{
        return <div className='w-[200px] h-[300px]  bg-gray-600 rounded-lg  flex flex-col p-1 gap-2 shadow-sm shadow-gray-600'>
        <img className='h-[50%] w-full object-cover' src={item.img} alt="" />
        <h2 className='text-[17px] text-white uppercase'>{item.name}</h2>
        <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus reiciendis voluptas modi?</p>
      </div>
      })}
    </div>
  )
}

export default Card