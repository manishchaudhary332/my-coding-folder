import React from 'react'
import Card from './Card'

const CardsContainer = ({courses}) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course)=>(
            <Card  course={course}/>
    ))}
    </div>
  )
}

export default CardsContainer