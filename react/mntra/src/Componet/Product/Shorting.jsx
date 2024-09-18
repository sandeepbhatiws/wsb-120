import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Shorting() {
    return (

        <>
            <section className='px-2 pb-3    border-b-1 border-bg-gray-300' >
                <div className=' w-full p-5 '>
                    <div className='flex'>
                        <p className='text-[14px]'>Home / Clothing / </p><span className='font-bold text-[14px]'>Men T-Shirts</span></div>
                    <p className='text-[16px] py-3' ><span className='font-bold text-[14px]'>Men T-Shirts</span>-157339 items</p>
                </div>
                <div className=' grid grid-cols-[20%_30%_auto] px-5 '>
                    <div className=''><span>FILTERS</span></div>

                    <div className='flex lg:gap-x-6  md:gap-x-2 gap-2 '> <span className='flex items-center'>Bundles  <MdOutlineKeyboardArrowDown /></span>
                        <span className='flex items-center align-center'> Country of Orgin <MdOutlineKeyboardArrowDown /></span>
                        <span className='flex items-center'> Size <MdOutlineKeyboardArrowDown /></span>

                    </div>
                    <div className=' flex justify-end '>
                        <select name="cars" id="cars" className='lg:w-[40%] md:py-1 md:w-[30%] rounded-none px-2 border border-gray-500'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                </div>

            </section>
            <hr />

        </>
    )
}
