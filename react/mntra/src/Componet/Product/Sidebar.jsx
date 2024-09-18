import React from 'react'

import { IoMdStar } from "react-icons/io";

export default function Sidebar() {
    return (
        <>

            <div className=' h-full bg-slate-400 innersrl border-r-2 border-gray-300' >

                <div className=' h-[200px] overflow-auto bg-white    border-b-2 border-gray-300'>
                    <div className=' sticky top-0   font-bold text-[18px] ps-5 bg-white'>Categories</div>
                    <div className=' px-5'>
                        <input type="checkbox" /> <label htmlFor="">bCAte_NAme</label>
                    </div>
                    <div className=' px-5'>
                        <input type="checkbox" /> <label htmlFor="">bCAte_NAme</label>
                    </div>
                    <div className=' px-5'>
                        <input type="checkbox" /> <label htmlFor="">bCAte_NAme</label>
                    </div>

                </div>
                <div className=' h-[200px] overflow-auto bg-white    border-b-2 border-gray-300'>
                    <div className=' sticky top-0   font-bold text-[17px] ps-5 bg-white'>Brand</div>
                    <div className=' px-5'>
                        <input type="checkbox"  className=' via-red-600'/> <label htmlFor="">bCAte_NAme</label>
                    </div>

                </div>

                <div className=' h-[100px]  bg-white    border-b-2 border-gray-300  pt-3'>
                    <div className=' sticky top-0   font-bold text-[17px] ps-5 bg-white '>PRICE</div>
                    <div className=' px-5'>
                    <input type="range" id="vol" name="vol" min="0" max="50" className='w-full'/>
                    </div>

                </div>

                <div className=' h-[200px]  bg-white    border-b-2 border-gray-300'>
                    <div className='  sticky top-0   font-bold text-[17px] ps-5 bg-white'>DISCOUNT RANGE</div>
                    <div className=' px-5 py-1'>
                        <input type="radio" /> <label htmlor="" className='ps-1'>5  %  and Above</label>
                       
                    </div>
                    <div className=' px-5  py-1'>
                        <input type="radio" /> <label htmlFor="">10  %  and Above</label>
                       
                    </div>
                    <div className=' px-5  py-1'>
                        <input type="radio" /> <label htmlFor="">15 %  and Above</label>
                       
                    </div>
                    <div className=' px-5  py-1'>
                        <input type="radio" /> <label htmlFor="">20  %  and Above</label>
                       
                    </div>
                 

                </div>
                {/* +++++++++++++++++++++++++++++++++++++++=Rating Section++++++++++++++++++++ */}
                <div className=' h-[200px]  bg-white     border-b-2 border-gray-300 font-bold '>
                    <div className='  sticky top-0   font-bold text-[17px] ps-5 bg-white'>Rating</div>
                    <div className=' px-5 flex gap-2  border border-b-1 py-2 hover:bg-red-300'>
                        <input type="radio" /> <label htmlFor="" className='flex items-center gap-2'> 4 <span className='text-yellow-400 font-bold text-[19px]'><IoMdStar /></span>& Above</label>
                    </div>
                    <div className=' px-5 flex gap-2'>
                        <input type="radio" /> <label htmlFor="" className='flex items-center gap-2'> 3 <span className='text-yellow-400 font-bold text-[19px]'><IoMdStar /></span>& Above</label>
                    </div>
                    <div className=' px-5 flex gap-2'>
                        <input type="radio" /> <label htmlFor="" className='flex items-center gap-2'> 2 <span className='text-yellow-400 font-bold text-[19px]'><IoMdStar /></span>& Above</label>
                    </div>
                    <div className=' px-5 flex gap-2'>
                        <input type="radio" /> <label htmlFor="" className='flex items-center gap-2'> 1<span className='text-yellow-400 font-bold text-[19px]'>  <IoMdStar /></span>& Above</label>
                    </div>


                </div>
              {/* +++++++++++++++++++++++++++++++++++++++=Rating Section++++++++++++++++++++ */}


            </div>

        </>
    )
}
