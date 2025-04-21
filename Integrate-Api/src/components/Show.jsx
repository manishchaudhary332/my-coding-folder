import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Show = () => {
    const [products, setproducts] = useState([])
    // yha Hamne Fake api store se ek api ko copy kiya fake products ko get krne ke liye
      const getProducts = ()=>{
        const api = "https://fakestoreapi.com/products";
    
        axios
        .get(api)
        .then((product)=>{
          console.log(product);
          setproducts(product.data)
          
        }).catch((err)=>{
          console.log(err);
          
        })
      }


  return (
    <div>
        
    <button onClick={getProducts} className='bg-red-300 rounded px-3 py-1 p-1'>Get Product</button>
    
    
         {/* agar products ki length 0 se badi hui to jitne bhi produsts he unko print kr do agar products nhi he to loading print kr do */}
    {products.length > 0 ? products.map(p => <li className='rounded  p-5 bg-red-200 mt-4 '>{p.title}</li> ): <h1>Loading...</h1>}
    
    </div>
  )
}

export default Show