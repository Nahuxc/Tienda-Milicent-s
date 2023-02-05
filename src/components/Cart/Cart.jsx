import React from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
  return (
    <div className='box-cart'>
      <Link to={"/carrito"}>
          <i className="fa-solid fa-cart-shopping">
              <span> 0 </span>
          </i>
      </Link>
    </div>

  )
}

export default Cart