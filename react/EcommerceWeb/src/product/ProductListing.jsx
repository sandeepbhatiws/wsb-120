import React, { useEffect, useState } from 'react'
import FilterSideBar from './FilterSideBar'
import ProductFilter from './ProductFilter'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import ShortingbarComponet from './ShortingbarComponet'


export default function () {
  let [AllCat, SetCat] = useState([])
  let [product, SetProducts] = useState([])
  let [FillterCat, FillterSetCat] = useState([])
  let [FillterCatTF, SetFillterCatTF] = useState(false)
  let [Shorting, SetShorting] = useState('')
  let [priceTo, SetpriceTo] = useState('')
  let [priceFrom, SetpriceFrom] = useState('')
  let [DisCountto, SetDisCountto] = useState('')
  let [DisCountfrom, SetDisCountfrom] = useState('')
  let [Rating, SetRating] = useState('')
  let [Brand, SetBrand] = useState([])
  let [Brandfit, SetbrandFit] = useState([])
  let [BrandTF,SetBrandTF]= useState(1)
  let [Loader,SetLoader] = useState(0)
 
  
  // console.log(Rating)
  // console.log(typeof (priceTo))

  // console.log(DisCountto)
  // console.log(priceFrom)
  //  console.log( typeof (Shorting))

  // console.log(Shorting)

  useEffect(() => {
    axios.get(`https://wscubetech.co/ecommerce-api/products.php?categories=${FillterCat}&sorting=${Shorting}&price_to=${priceTo}&price_from=${priceFrom}&discount_to=${DisCountto}&discount_from=${DisCountfrom}&rating=${Rating},&limit=20&brands=${Brandfit}`)

      .then((res) => {
        // console.log(res.data.data)
        SetProducts(res.data.data)
        SetLoader(1)


      })
      .catch((error) => {
      })
  }, [FillterCatTF, Shorting, priceFrom, priceTo, DisCountfrom, DisCountto,Rating,BrandTF])


  // https://wscubetech.co/ecommerce-api/brands.php
  // https://wscubetech.co/ecommerce-api/products.php$
  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((res) => {
        // console.log(res)
        SetCat(res.data.data)
      })
      .catch((error) => {

      })
  }, [])

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((res) => {
        console.log(res.data.data)

        SetBrand(res.data.data)

      })
      .catch((error) => {

      })

  }, [])



  return (
    <>
      <ShortingbarComponet Shorting={Shorting} SetShorting={SetShorting} />
      <Container fluid>
        <Row className=' d-flex  mt-3'>
          <FilterSideBar
            AllCat={AllCat}
            FillterCat={FillterCat} FillterSetCat={FillterSetCat}
            FillterCatTF={FillterCatTF} SetFillterCatTF={SetFillterCatTF}
            SetpriceTo={SetpriceTo} SetpriceFrom={SetpriceFrom}
            SetDisCountto={SetDisCountto} SetDisCountfrom={SetDisCountfrom}
            SetRating={SetRating}
            Brand={Brand}
            Brandfit={Brandfit}
            SetbrandFit={SetbrandFit}
            SetBrandTF={SetBrandTF}
            BrandTF={BrandTF}
           
            
          />
          <Col xs={9} className='d-flex flex-wrap'>
            <ProductFilter
             Allproduct={product}
             Loaders={Loader}
             SetLoader={SetLoader}
              />
          </Col>
        </Row>
      </Container>

    </>



  )

}
