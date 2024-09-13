import React from 'react'

export default function FilterSideBar({ categories, categoryName, setCategoryName, filter, setFilter, loader, setLoader }) {

    const saveFilter = (slug) => {
        if(categoryName.includes(slug)){
            var category = categoryName.filter((v,i) => {
                if(v != slug){
                    return v;
                }
            })
            setCategoryName(category);
        } else {
            categoryName.push(slug);
            setCategoryName(categoryName);
        }
        setFilter(!filter);
        setLoader(true);
    }
  return (
    <div class="sidebar col-md-3 px-0">
        <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
        <span class="mr-2 filter-close-btn">
            X
        </span>
        Filters
        <span class="ml-auto text-uppercase">Reset Filters</span>
        </h1>
        <div class="sidebar__inner ">
        <div class="filter-body">
            <div>
            <h2 class="border-bottom filter-title">Categories</h2>
            <div class="mb-30 filter-options">
                
                {
                    categories.map((category,index) => {
                        return(
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id={category.slug} onClick={ () => saveFilter(category.slug) }/>
                                <label class="custom-control-label" for={category.slug}> {  category.name }</label>
                            </div>
                        )
                    })
                }
                
            </div>

            <h2 class="font-xbold body-font border-bottom filter-title">Cuisines</h2>
            <div class="mb-3 filter-options" id="cusine-options">
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Chinese" checked/>
                <label class="custom-control-label" for="Chinese">Chinese</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Italian"/>
                <label class="custom-control-label" for="Italian">Italian</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Mexican"/>
                <label class="custom-control-label" for="Mexican">Mexican</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Thai"/>
                <label class="custom-control-label" for="Thai">Thai</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Gujarati"/>
                <label class="custom-control-label" for="Gujarati">Gujarati</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Panjabi"/>
                <label class="custom-control-label" for="Panjabi">Panjabi</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="South-Indian"/>
                <label class="custom-control-label" for="South-Indian">South Indian</label>
                </div>
            </div>

            {/* <!-- cusine filters end --> */}
            <h2 class="font-xbold body-font border-bottom filter-title">Price Range</h2>
            <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                <span id="slider-range-value1">$100</span>
                <span id="slider-range-value2">$10,000</span>
            </div>
            <div class="mb-30 filter-options">
                <div>
                <div id="slider-range">
                    <form>
                    <div class="form-group">
                        <input type="range" class="form-control-range" id=""/>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <h2 class="border-bottom filter-title">Services</h2>
            <div class="mb-3 filter-options" id="services-options">
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Breakfast" checked/>
                <label class="custom-control-label" for="Breakfast">Breakfast</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Lunch"/>
                <label class="custom-control-label" for="Lunch">Lunch</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Donner"/>
                <label class="custom-control-label" for="Donner">Donner</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Cafe"/>
                <label class="custom-control-label" for="Cafe">Cafe</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="Brunch"/>
                <label class="custom-control-label" for="Brunch">Brunch</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="other"/>
                <label class="custom-control-label" for="other">Other</label>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
