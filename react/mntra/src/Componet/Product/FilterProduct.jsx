import React from 'react'
import ProductCard from './ProductCard'


export default function FilterProduct({ Card,SetCrad}) {
  return (<>
       {

         Card.map((v,i)=>{
          // console.log(v)
        return(
          <ProductCard v={v}/>
      
        )
         })
        
    
    }
  </>

  )
}
