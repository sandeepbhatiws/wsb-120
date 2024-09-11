import React, { useEffect, useState } from 'react'
import FilterSideBar from './FilterSideBar'
import ProductFilter from './ProductFilter'
import axios from 'axios'

export default function ProductListing() {

    let [products, setProducts] = useState([]);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php?limit=30')
            .then((success) => {
                setProducts(success.data.data);
            })
            .catch((error) => {

            });
    },[]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((success) => {
                setCategories(success.data.data);
            })
            .catch((error) => {

            });
    },[]);

    

  return (
    <>
        <div class="search-section">
        <div class="container-fluid container-xl">
            <div class="row main-content ml-md-0">
            
            <FilterSideBar categories={categories}/>

            <ProductFilter products={ products }/>
            </div>
        </div>
        </div>
    </>
  )
}
