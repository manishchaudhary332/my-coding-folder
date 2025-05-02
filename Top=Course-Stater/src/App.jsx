import React, { useState } from 'react'
import CardsContainer from "./Components/CardsContainer"
import Filter from "./Components/Filter"
import data from "./data"

const App = () => {
  const [category, setcategory] = useState("All")

  const filterCourse =  category === "All" ? data : data.filter(course => course.category === category)


  return (
    <div className='h-screen w-[1530px] bg-zinc-300'>
      <Filter setcategory={setcategory}/>
      <CardsContainer courses={filterCourse} />
    </div>
  )
}

export default App