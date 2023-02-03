import React from 'react'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'
import "./HomeProd.css"

const HomeProd = () => {

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
      </div>
      <div className='box-btn'>
        <Link to={"/productos"}><button className='btn-vermas'>VER MAS</button></Link>
      </div>
    </div>
  )
}

export default HomeProd