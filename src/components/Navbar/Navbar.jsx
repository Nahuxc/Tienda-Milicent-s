import React from 'react'
import Cart from "../Cart/Cart"
import Submenu from './Submenu/Submenu'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='box-navbar'>
      <div className='navbar'>
        <div className='navbar-li'>
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li className='cart'> <Cart/> </li>
          <li className='heart'><i className="fa-solid fa-heart"></i></li>
        </div>
        <div className='navbar-logo'>
          <Link className='link-h2' to={"/"}><h2>MILICENT´<span>S</span></h2></Link>
        </div>
        <div className='navbar-user'>
          <li className='user'><i className="fa-solid fa-user"></i></li>
          <Submenu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;