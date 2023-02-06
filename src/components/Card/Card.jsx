import React from 'react'
import { Link } from 'react-router-dom'
import FavHeart from '../FavHeart/FavHeart'
import "./Card.css"

const Card = ({id, nombre, marca, img, precio, descripcion, stock, categoria, tipo }) => {
  return (
    <div className='box-card'>
      <div className='card'>
        <div className='card-box-img'>
          <img className='img' src={img} alt="" />
        </div>
        <div className='card-box-text'>
          <div className='card-text'>
            <span className='card-text_span'>{marca} </span>
            <h2 className='card-text_h2'>{nombre}</h2>
            <p className='card-text_price'>ARS$ {precio} </p>
          </div>
          <FavHeart/>
        </div>
        <div className='box-card-btns'>
          <button className='btn-card-buy'>Comprar</button>
          <Link className='btn-card-see' to={`/detalle/${nombre}/${id}`} >
            Ver
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card