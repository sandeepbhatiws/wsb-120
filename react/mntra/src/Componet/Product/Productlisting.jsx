
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import FilterProduct from './FilterProduct'
import Shorting from './Shorting'
import axios from 'axios'
export default function Productlisting() {
let [Card, SetCrad] = useState([])


useEffect(()=>{

    axios.get('https://wscubetech.co/ecommerce-api/products.php')
     .then((res)=>{

        // console.log(res.data.data)
        SetCrad(res.data.data)

     })
     .catch((error)=>{


     })

},[])


  return (

     
    <>

    <Shorting/>
    <div className='flex gap-6 mt-4'>  
        <div className='w-[20%] border border-green-600'>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <div className=' grid grid-cols-4 gap-3'>
          <FilterProduct  Card={Card} SetCrad={SetCrad} />
          </div>
        </div>
      </div>
    
     
    </>

  )
}
