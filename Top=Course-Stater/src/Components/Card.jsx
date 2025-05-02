import React from 'react'

const Card = ({course}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <img src={course.image}  className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
        </div>
      </div>
  )
}

export default Card