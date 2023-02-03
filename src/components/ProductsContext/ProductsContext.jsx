import React from 'react'
import Card from '../Card/Card';
import "./ProductsContext.css"

const ProductsContext = () => {
  return (
    
    <div className='background-products'>
      <div className='box-text-products'>
        <h2 className='text-h2'>#MILICENT<span>SALE</span></h2>
      </div>
      <div className='box-text-products-init'>
        <h2>LO MAS VENDIDO</h2>
      </div>
      <div className='box-header-products'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ProductsContext