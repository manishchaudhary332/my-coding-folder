import React, { createContext } from 'react'
import { useState  } from 'react'

export const UserContext = createContext()

const Context = (props) => {
    // console.log(props);
    const [users, setusers] = useState([
        {id: 0, name: 'John deo', city:"USA" },
        {id: 1, name: 'manish', city:"UK" },
        {id: 2, name: 'Bhola', city:"Canada" },
        {id: 3, name: 'Chintu', city:"Australia" },
    ])
    
  return ( 
  <UserContext.Provider value={{users,setusers}} >
    {props.children }
  </UserContext.Provider>
);
};

export default Context