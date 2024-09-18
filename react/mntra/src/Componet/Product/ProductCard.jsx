import React, { useContext } from 'react'
import { CommonContext } from '../Context/Context';
//  import logo from './images/10035.jpeg'

export default function ProductCard({v}) {

  let {addToCart} = useContext(CommonContext);

    // console.log(v)  
  return (
<>

<div  className='border-2 border-gray-300 border-solid ' >
    <div className=''>
        <img src={v.image} alt=""   className=''/>
        </div>
        <div className='p-2'>
            <p className='font-semibold f'>{v.name}</p>
            <div className='flex justify-between'>
            <p> price:{v.price}</p> 
             <span> Rating:{v.rating}</span>
             </div> 

            
        </div>
        <div className='flex justify-center pb-2'>
        <button className='  border-2 border-[gray] rounded-md p-2 flex hover:bg-slate-200' onClick={ () => addToCart(v) }>Add to cart</button>
        </div>

</div>

</>
  )
}
