import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Submenu.css"

const Submenu = () => {

    const [deploy, setDeploy] = useState(false)

    const desplegar = ()=>{
        if(deploy === false){
            setDeploy(true)
            document.querySelector(".submenu").classList.toggle("active")
            document.querySelector(".btn-submenu").classList.toggle("move-btn")
        }else if( deploy === true){
            setDeploy(false)
            document.querySelector(".submenu").classList.remove("active")
            document.querySelector(".btn-submenu").classList.remove("move-btn")
        }
    }


  return (
    <div>
        <button onClick={desplegar} className='btn-submenu'>
            {
                deploy === false ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>
            }
        </button>
        <div className='submenu'>
            <div className='submenu-content'>
                <Link className='link-submenu' to={"/"}><li className='list-submenu'><i className="fa-solid fa-house"></i> Inicio</li></Link> 
                <Link className='link-submenu' to={"/productos"}><li className='list-submenu'><i className="fa-solid fa-shirt"></i> Productos</li></Link> 
                <Link className='link-submenu' to={"#"}><li className='list-submenu'><i className="fa-solid fa-users"></i> Sobre Nosotros</li></Link> 
                <Link className='link-submenu' to={"#"}><li className='list-submenu'><i className="fa-solid fa-phone"></i> Comunicate</li></Link>
                <Link className='link-submenu' to={"#"}><li className='list-submenu'><i className="fa-solid fa-heart"></i> Ropa Favorita</li></Link>
            </div>
        </div>
    </div>
  )
}

export default Submenu