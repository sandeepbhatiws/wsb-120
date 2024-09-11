import React from 'react'

export default function ProductCard({product}) {
  return (
    <div class="col-md-6 col-lg-4 col-xl-4">
        <img src={ product.image} />
    </div>
  )
}
