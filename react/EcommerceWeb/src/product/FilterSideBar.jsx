import React from 'react'
import { Col } from 'react-bootstrap'
import { LiaStarSolid } from "react-icons/lia";
export default function FilterSideBar({ AllCat, FillterCat, FillterSetCat, FillterCatTF, SetFillterCatTF,
  priceTo, SetpriceTo, SetpriceFrom, SetDisCountfrom, SetDisCountto, SetRating, Brand, Brandfit, SetbrandFit, BrandTF, SetBrandTF }) {
  // console.log(priceTo)
  

  // +====================FIlter category Section +===============================================
  let filter = (slug) => {
    // console.log(slug)
    if (FillterCat.includes(slug)) {
      var category = FillterCat.filter((value, index) => {
        if (value != slug) {
          return value;
        }

      })
      FillterSetCat(category)
    }
    else {
      FillterCat.push(slug)
      FillterSetCat(FillterCat)
    }
     SetFillterCatTF(!FillterCatTF)

  }

// +====================FIlter category End Section +===============================================

  let AllData = (e) => {
    // console.log(e.target.value)
    if (e.target.value == '1') {

      SetpriceTo(250);
      SetpriceFrom(10);
    }
    else if (e.target.value == '2') {

      SetpriceTo(500);
      SetpriceFrom(250);
    }
    else if (e.target.value == '3') {

      SetpriceTo(1000);
      SetpriceFrom(250);
    }
    else if (e.target.value == '4') {
      SetpriceTo(200000);
      SetpriceFrom(1000);
    }



    // if(e.target.tagName=='input'){

    //   alert('fnwufeuofh')

    // }

  }

  let Discount = (e) => {


    if (e.target.value == '1') {

      SetDisCountto(10);
      SetDisCountfrom(5);
    }
    else if (e.target.value == '2') {

      SetDisCountto(30);
      SetDisCountfrom(10);
    }
    else if (e.target.value == '3') {

      SetDisCountto(40);
      SetDisCountfrom(15);
    }
    else if (e.target.value == '4') {
      SetDisCountto(60);
      SetDisCountfrom(20);
    }

  }
  let Rating = (e) => {
    SetRating(e.target.value);
  }



  let Brands = (slug) => {
    if (Brandfit.includes(slug)) {
      let Allbrand = Brandfit.filter((v, i) => {
        if (v != slug) {
          return v;

        }
      })
      SetbrandFit(Allbrand)

    }
    else {
      Brandfit.push(slug)
      SetbrandFit(Brandfit)

    }

    // console.log(Brandfit);

    SetBrandTF(!BrandTF)
    

  }



  return (
    <>

      <Col xs={3}>
        <Col xs={12} className=' p-1 Category-1  ' >
          <Col className='card-inner rounded-3'>
            <span>
              <p className='h4 fw-bolder text-center text-capitalize bg-body-secondary  position-sticky top-0 z-1  mb-0 p-1 Category'>Category</p></span>
            {
              AllCat.map((v, i) => {
                return (
                  <div class="list-group p-0  z-0">

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="checkbox" value="" id={v.slug} onClick={() => filter(v.slug)} />
                      <label class="form-check-label" htmlFor={v.slug}> {v.name}</label>
                    </div></li>

                  </div>

                )
              })
            }
          </Col>

        </Col>



        {/* +++++++++++++======== */}

        <Col xs={12} className=' p-1 Category-1  ' >
          <Col className='card-inner rounded-3'>
            <span>
              <p className='h4 fw-bolder text-center text-capitalize bg-body-secondary  position-sticky top-0 z-1  mb-0 p-1 Category'>Brand</p></span>
            {
              Brand.map((v, i) => {
                return (
                  <div class="list-group p-0  z-0">
                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="checkbox" value="" id={v.slug} onClick={() => Brands(v.slug)} />
                      <label class="form-check-label" htmlFor={v.slug}> {v.name}</label>
                    </div></li>

                  </div>

                )
              })
            }
          </Col>





        </Col>

        {/* ===================================================================================================================================== */}



        <Col xs={12} className=' px-2 mt-2' >
          <div className='outerboder '>
            <Col className='card-inner-2  rounded-top-3'>
              <div onClick={AllData} className='card-inner-3'>
                <span>

                  <p className='h4 fw-bolder text-center text-capitalize bg-body-secondary  position-sticky top-0 z-1  mb-0 p-1 Category'>Price</p></span>
                <div class="list-group p-0  z-0">
                  <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                    <input class="form-check-input" type="radio" value="1" name='i' />
                    <label class="form-check-label">Rs: 10 To Rs: 250</label>
                  </div></li>

                  <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                    <input class="form-check-input" type="radio" value="2" name='i' />
                    <label class="form-check-label">Rs: 250 To Rs: 500</label>


                  </div></li>

                  <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                    <input class="form-check-input" type="radio" value="3" name='i' />
                    <label class="form-check-label">Rs: 500 To Rs: 1000</label>
                  </div></li>

                  <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                    <input class="form-check-input" type="radio" value="4" name='i' />
                    <label class="form-check-label">Rs: 1000 To Rs: Above</label>

                  </div></li>

                </div>
              </div>

            </Col>



            <Col xs={12}>
              <Col className='card-inner-2 '>
                <div onClick={Discount} className='card-inner-3'>
                  <span>

                    <p className='h4 fw-bolder text-center text-capitalize bg-body-secondary  position-sticky top-0 z-1  mb-0 p-1 Category'>Discount</p></span>
                  <div class="list-group p-0  z-0">
                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="1" name='i' />
                      <label class="form-check-label"> 5% and Above</label>
                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="2" name='i' />
                      <label class="form-check-label">10% and Above</label>


                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="3" name='i' />
                      <label class="form-check-label">15% and Above</label>
                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="4" name='i' />
                      <label class="form-check-label">20% and Above</label>

                    </div></li>



                  </div>
                </div>

              </Col>
            </Col>


            <Col xs={12}>
              <Col className='card-inner-2 '>
                <div
                  onClick={Rating}
                  className='card-inner-3  rounded-3'  >
                  <span>

                    <p className='h4 fw-bolder text-center text-capitalize bg-body-secondary  position-sticky top-0 z-1  mb-0 p-1 Category'>Rating</p></span>
                  <div class="list-group p-0  z-0">
                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="4" name='i' />
                      <label class="form-check-label">4<LiaStarSolid /> & Above </label>
                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="3" name='i' />
                      <label class="form-check-label">3<LiaStarSolid /> & Above</label>


                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="2" name='i' />
                      <label class="form-check-label">2<LiaStarSolid /> & Above</label>
                    </div></li>

                    <li class="list-group-item list-group-item-action list-group-item-primary z-0 rounded-0 rounded-bottom-3"><div class="form-check  ">
                      <input class="form-check-input" type="radio" value="1" name='i' />
                      <label class="form-check-label">1<LiaStarSolid /> & Above</label>

                    </div>
                    </li>





                  </div>
                </div>

              </Col>
            </Col>






          </div>
        </Col>



      </Col>


    </>



  )
}
