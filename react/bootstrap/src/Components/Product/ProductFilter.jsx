import React from 'react'
import ProductCard from './ProductCard'

export default function ProductFilter({ products }) {
    

  return (
    <div class="content col-md-9">
                <div class="d-flex justify-content-between border-bottom align-items-center">
                <h2 class="title">Products</h2>
                <div class="filters-actions">
                    <div>
                    <button class="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>
            Filter</button>
                    </div>
                    <div class="d-flex align-items-center">

                    <div class="dropdown position-relative sort-drop">
                        <button type="button" class="btn btn-transparent dropdown-toggle body-clr p-0 py-1 sm-font fw-400 sort-toggle" data-toggle="dropdown">
            <span class="mr-2 d-md-none">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
        </span>   
                        <span class="d-md-inline-block ml-md-2 font-semibold">Newest First</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right p-0 no-caret">
                        <a class="dropdown-item selected" href="javascript:void(0)">Newest First</a>
                        <a class="dropdown-item" href="javascript:void(0)">Lowest First</a>
                        <a class="dropdown-item" href="javascript:void(0)">Highest First</a>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                <div class="row row-grid">

                    {
                        products.map((data,index) => {
                            return(
                                <ProductCard product={data}/>
                            )
                        })
                    }
                    
                </div>
            </div>
  )
}
