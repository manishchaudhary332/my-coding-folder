import React from 'react'
import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const data = [
    {img:"https://images.unsplash.com/photo-1527735095040-147bffb4cede?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2VyfGVufDB8fDB8fHww",
      name:"song1",
      artist:"Arjit singh",
      added:false
    },
    {img:"https://images.unsplash.com/photo-1595422656857-ced3a4a0ce25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
      name:"song2",
      artist:"Jassmanak ",
      added:true
    },
    {img:"https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
      name:"song3",
      artist:"Sidhu paaji",
      added:false
    },
    {img:"https://plus.unsplash.com/premium_photo-1682920140924-d8b5db318d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2VyfGVufDB8fDB8fHww",
      name:"song4",
      artist:"gulzar",
      added:false
    },
  ]

  const [songdata, setsongdata] = useState(data)

  function HandleClick(index){
    setsongdata((prev)=>{
     return  prev.map((item,itemIndex)=>{
        if(itemIndex === index){
          return {...item,added: !item.added}
        }
        return item
        
      })
    })
  }


  return (
    <div className='w-full h-screen bg-gray-500'> 
      <Navbar data={songdata}/>
      <div className='flex gap-4 p-2'>
      {songdata.map((item,index)=>{
        return <Card img={item.img} name={item.name} added={item.added} click={HandleClick} index={index} />

      })}
      </div>
      
    </div>
  )
}

export default App