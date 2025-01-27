import React from 'react'
import './ProductsContainer.css'

const ProductsContainer = (props) => {
  return (
    <div {...props} className='productsContainer'>{props.children}</div>
  )
}

export default ProductsContainer