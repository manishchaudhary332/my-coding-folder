import React from 'react'
import Card from './components/Card'
import { useState } from 'react'


const App = () => {

  const data =[{
    friend:true,
    name: 'John Doe',
    Profession: 'Web Developer',
    img:"https://plus.unsplash.com/premium_photo-1737659209063-32e2b1a385a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D"
  },
  {
    friend:false,
    name: 'Chintu',
    Profession: 'Web Designer',
    img:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzJTIwbWVufGVufDB8fDB8fHww"
  },
  {
    friend:true,
    name:'manish',
    Profession:'Student',
    img:"https://plus.unsplash.com/premium_photo-1664875849335-539ff66beef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVscyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    friend:false,
    name:'Rahul',
    Profession:'Teacher',
    img :"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
  }
]

  const [realData, setrealData] = useState(data)

 

  const HandleFriend = (cardIdx) => {
      setrealData((pre)=>{
        return  pre.map((item,index)=>{
            if(index ===cardIdx){
              return {...item,friend:!item.friend}
            }
            return item
          })
      })
  }

  



  return (
    <div className='w-full h-screen flex bg-slate-400'>
      
    {realData.map((item,index)=>{
     return <Card img={item.img} name={item.name} index={index} Profession={item.Profession} friend={item.friend} HandleFriend={HandleFriend} />
    })}
    </div>
  )
}

export default App