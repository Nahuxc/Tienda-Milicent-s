import React from 'react'
import "./HomeContent.css"

const HomeContent = () => {
  return (
    <div className='background-home'>
      <div className='triangulo'>
      </div>
      <div className='box-img'>
        <img src="https://i.pinimg.com/originals/63/53/ef/6353ef1e14f68d8d609392fee28cf9c5.png" alt="" />
      </div>
          <div className='box-discounts'>

              <div className="discounts">
                  <span className="num">10%</span>
                  <div className="discounts-sub">
                      <span className="dto">DE DTO.</span>
                      <span className="dto-text2">EN PEDIDOS DE $40 +</span>
                  </div>
              </div>

              <div className="discounts">
                  <span className="num">20%</span>
                  <div className="discounts-sub">
                      <span className="dto">DE DTO.</span>
                      <span className="dto-text2">EN PEDIDOS DE $150 +</span>
                  </div>
              </div>

              <div className="discounts">
                  <span className="num">30%</span>
                  <div className="discounts-sub">
                      <span className="dto">DE DTO.</span>
                      <span className="dto-text2">EN PEDIDOS DE $70 +</span>
                  </div>
              </div>
          </div>
        <div className='triangulo-inverso'>
        </div>
    </div>
  )
}

export default HomeContent