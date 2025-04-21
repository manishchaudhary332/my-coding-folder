import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

   const name =  useRef(null)
   const age = useRef(null)
   const email = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name.current.value);
        console.log(age.current.value);
        console.log(email.current.value);
        
    }


  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input ref={name} type="text" name='name' placeholder='Enter Your name' />
        <input ref={age} type="text" name='age' placeholder='Enter your age' />
        <input ref={email} type="email" name='email' placeholder='Enter Your Email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseRef