import React, { useContext, useState } from 'react'
// import logo from '../../images/10008.png'
import { RxCrossCircled } from 'react-icons/rx'
import Header from '../Common/Header'
import { CommonContext } from '../Context/Context';

function Wishlist() {

    let {cartItems, deleteCart} = useContext(CommonContext);

    let [quantity,setquantity]=useState(1)
    let minus=()=>{
        quantity--;
        setquantity(quantity)
    }
    let add=()=>{
        // alert('scdsd')
        quantity++;
        setquantity(quantity)
    }
    return (
        <div>
            <Header />
            {/* <div className='grid grid-cols-6'>
         
         <div  className='border-2 border-gray-300 border-solid ' >
        <div className='relative'>
            <img src={logo} alt=""   className=''/>
            <span className=' text-[25px] absolute top-0  right-0  '><RxCrossCircled /></span>
           
            </div>
            <div className='p-2'>
                <p className='font-semibold f'></p>
                <div className='flex justify-between'>
                <p> price:</p> 
                 <span> Rating:</span>
                 </div>     
            </div>
            <div className='flex justify-center pb-2'>
            <button className='  border-2 border-[gray] rounded-md p-1 flex hover:bg-slate-200 '>move To bag</button>
            </div>
    
    </div>
        
          
        </div> */}


            <table className='min-w-full leading-normal '>
                <thead>
                    <tr>
                        <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200" >
                      s.no
                        </th>

                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                            Name
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                            images
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                            Price 
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                             Quantity
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                           Total Price 
                        </th>
                        <th
                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                             Delete
                        </th>
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        cartItems.map((v,i) => {
                            return(
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    {i+1}
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        {v.name} 
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        photo
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        {v.price}
                                    </td>

                                    <td className="flex gap-6 px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span>
                                        <button className='text-[30px] border border-[black] px-2 ' onClick={()=>minus()}>-</button> <span>{v.qty}</span> 
                                        <button onClick={()=>add()} className='text-[30px]'>+</button></span>
                                    </td>

                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        {v.price * v.qty}
                                    </td>
                                
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <button className='bg-[black] text-[white] text-bold rounded-[5px] px-[10px] py-[5px]' onClick={() => deleteCart(i)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    
                </tbody>
            </table>
        </div>
    )
}

export default Wishlist
