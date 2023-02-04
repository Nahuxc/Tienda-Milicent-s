import React from 'react'
import "./Card.css"

const Card = ({nombre, marca, img, precio, descripcion, stock, categoria, tipo }) => {
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
          <div className='box-heart'>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
        <div className='box-card-btns'>
          <button className='btn-card-buy'>Comprar</button>
          <button className='btn-card-see'>Ver</button>
        </div>
      </div>
    </div>
  )
}

export default Card