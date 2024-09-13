import React, { useEffect, useState } from 'react'
import FilterSideBar from './FilterSideBar'
import ProductFilter from './ProductFilter'
import axios from 'axios'

export default function ProductListing() {

    let [products, setProducts] = useState([]);
    let [categories, setCategories] = useState([]);
    var [categoryName, setCategoryName] = useState([]);
    let [filter, setFilter] = useState(false);
    let [loader, setLoader] = useState(true);

    useEffect(() => {
        // axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=30&categories=${categoryName}`)
        

        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params:{
                limit: 30,
                categories : categoryName,
            }
        })
            .then((success) => {
                setProducts(success.data.data);
                setLoader(false);
            })
            .catch((error) => {

            });
    },[filter]);

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
            
            <FilterSideBar categories={categories} categoryName={categoryName} setCategoryName={setCategoryName} filter={filter} setFilter={setFilter} loader ={loader} setLoader = {setLoader} />

            <ProductFilter products={ products } loader ={loader} setLoader = {setLoader}/>
            </div>
        </div>
        </div>
    </>
  )
}
