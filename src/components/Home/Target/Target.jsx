import React from 'react'
import "./Target.css"

const Target = () => {
  return (
    <div className='box-target'>
      <div className='target-content'>
        <i className="fa-solid fa-box-open"></i>
        <h2 className='target-content-text_dev'>DEVOLUCIONES GRATIS</h2>
        <span>LAS CONDICIONES SE APLICAN</span>
      </div>
      <div className='target-content'>
      <i className="fa-solid fa-gift"></i>
        <h2 className='target-content-text_gift'>E-TARJETA DE REGALO</h2>
      </div>
      <div className='target-content'>
        <div className='target-content-text_advertising'>
          <h2 className='target-content-text_extra'>15% <span>dto </span>Extra</h2>
          <span>+</span>
          <h2 className='target-content-text_send'>Envio Gratuito</h2>
        </div>
        <span>TU PRIMER PEDIDO</span>
      </div>
      <div className='target-content'>
        <div className='target-content-share'>
        <i className="fa-solid fa-paper-plane"></i>
        <h2 className='target-content-text_share'>REFIERE AMIGOS</h2>
        </div>
      </div>
    </div>
  )
}

export default Target