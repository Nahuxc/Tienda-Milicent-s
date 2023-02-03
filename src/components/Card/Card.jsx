import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='box-card'>
      <div className='card'>
        <div className='card-box-img'>
          <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/214/products/saddie-quemado1-8117ee915dcabafb6816642902310713-640-0.webp" alt="" />
        </div>
        <div className='card-box-text'>
          <div className='card-text'>
            <span className='card-text_span'>Milicent´s Century</span>
            <h2 className='card-text_h2'>BUZO MILICENT´S</h2>
            <p className='card-text_price'>$100 USD</p>
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