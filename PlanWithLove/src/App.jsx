import React, { useState } from 'react'
import data from "./data"
import Card from './components/Card'


const App = () => {
  const [cards, setcards] = useState(data)

  const handleRemoveCard = (idx) => {
    setcards((prev)=>{
      return prev.filter((card,cardidx)=>{
        return idx !== cardidx
      })
    })
    
  };

  
  

  return (
    <div className='h-screen w-full  bg-zinc-400 flex gap-3 flex-wrap p-5'>
      {cards.map((item ,idx)=>{
        return <Card item={item} idx={idx} onRemove={handleRemoveCard}  />
      })} 
    </div>
  )
}

export default App