import React from 'react'
import { Col, } from 'react-bootstrap'

import { LuIndianRupee } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { GrStar } from "react-icons/gr";



export default function ProductCard({ Allproduct }) {
  // console.log(Allproduct)
  return (
    <>



      <Col xs={3}className=' p-1 card-hover-1 rounded-3 '>
        <Col xs={12} className='card-hover-2 p-2 rounded-3 bg-light  ' >
      
   
      
          <span className=' position-relative '>
            <img src={Allproduct.image} alt="" className=' img-fluid hoverimg  rounded-3' />
            <i className='fs-3 text-dark  position-absolute top-75 end-0'>< CiHeart /></i>
          </span>
          <p className=' fw-bold fst-normal m-0 mt-2 '>{Allproduct.name}</p>
          <span className=' d-flex justify-content-between'>
            <span>< LuIndianRupee />{Allproduct.price}</span>
            <span className=' d-flex  bg-light  boder align-items-center px-1  gap-1 rounded-4'><i className='  mb-1 text-success '><GrStar /></i> | {Allproduct.rating}</span>
          </span>
          <p className='mt-2 mb-0 pb-0  text-right  fw-4 d-flex  justify-content-between'>
            <b>Stock :{Allproduct.stock}</b>
            <button
              type="button"
              class="btn btn-outline-info px-3">
              Add to cart
            </button>
          </p>








        </Col>
      </Col>



    </>

  )
}
