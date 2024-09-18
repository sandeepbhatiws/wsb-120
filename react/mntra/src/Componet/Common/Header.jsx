import React, { useContext, useState } from 'react'
import logo from '../../assets/images/logo.png.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CommonContext } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';

export default function Header() {

  let {cartItems} = useContext(CommonContext);


  // let [responsebtu,Setres]=useState(0)


  return (
    <>
      {/* <div className='container w-full'> */}
      <ToastContainer/>

      <nav className=' bg-[#fdfdfd] lg:px-[4%] uppercase font-semibold text-[10px] md:text-[12px] lg:text-[14px] items-center  lg:justify-between  md: justify-between shadow-lg  px-2 flex w-full md:px-3 sticky top-0 z-10'>
      
        <div className='flex py-4'>
        <Link  to={'/'} className='w-[70px]'>   <img src={logo} alt="" className='w-[100%]' /></Link> 
          
          
        
        <ul className='hidden gap-2 px-2 py-3 antialiased md:gap-3 lg:gap-5 md-gap-3 md:px-3 lg:px-5 h md:flex'>
          <li>men</li> 
          <li>Women</li>
          <li>Kids</li>
          <li>Home&Living</li>
          <li>BeAuty</li>
          <li>Studio</li>
        </ul>
        </div>
      

        <div className='flex justify-end w-full gap-3 md:gap-8 lg:gap-10'>
          <div className=' items-center  text-lg  border-2 md:w-[40%] w-[40%]  gap-2 lg:w-[50%]  bg-white px-3  rounded-md  hidden md:fllex'>
            <IoSearchOutline />
            <input type="text" className=' lg:py-2 md:py-1 w-full focus: outline-none text-[14px] ' placeholder='Search for products,brands and more' />
          </div>
          <div className='flex items-center gap-3 text-sm lg:gap-5'>
            <div>
              <span className='flex justify-center text-[19px]'><CgProfile /></span>
              <p className=' lg:text-[12px] md:text-[10px] text-[8px]'>profile</p>
            </div>
           <Link to={"/wishlist"}>
           <div >
              <span className='flex justify-center text-[19px]'><FaHandHoldingHeart /></span>
              <p className=' lg:text-[12px] md:text-[10px] text-[8px]' >Cart ({ cartItems.length })</p>
            </div>

           </Link>
            <div>
              <span className='flex justify-center text-[19px]'><IoBagCheckOutline /></span>
              <p className=' lg:text-[12px] md:text-[10px] text-[8px]'>bag</p>
            </div>
          </div>
        </div>


        <div>

        </div>
      </nav>
      {/* </div> */}



    </>
  )
}
