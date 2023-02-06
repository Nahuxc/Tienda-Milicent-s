import React from 'react'
import { Link } from 'react-router-dom'
import CountItem from '../CountItem/CountItem'
import "./CardDetail.css"

const CardDetail = ({id, nombre, descripcion, categoria, precio, stock, img, talle, descuento, color, tipo}) => {
    return (
      <div>
        <div className='card-detail'>
            <Link className='back-icon' to={"/productos"}><i class="fa-solid fa-arrow-left"></i></Link>
          <div className='box-card-detail'>
            <div className='box-card-detail-img'>
              <div className='box-img-first'>
                <img src={img} alt={nombre} />
              </div>
              <div className='box-change-img'>
                <div className='boxs-img'>
                  <img src={img} alt={nombre} />
                </div>
                <div className='boxs-img'>
                  <img src={img} alt={nombre} />
                </div>
                <div className='boxs-img'>
                  <img src={img} alt={nombre} />
                </div>
              </div>
            </div>
            <div className='box-card-texts'>
              {/* textos de titulo del producto */}
                <div className='texts-prod-init'>
                  <span>NUEVO | + 100 VENDIDOS</span>
                  <h2>{nombre} | {tipo} | Talle: {talle}  </h2>
                </div>
                {/* seccion de textos de los precios, cuotas y descuentos */}
                <div className='texts-prod-price'>
                  <span className='texts-prod-price_precio'>ARS $  {precio} </span>
                  <p className='texts-prod-price_descuento'>ARS $ {descuento} <span className='texts-prod-price_descuento-span'>10% off</span> </p>
                  <p className='texts-prod-price_cuotas'> en 6 cuotas de {parseInt(descuento / 6) } </p>
                  <Link className='texts-prod-price_metodos' to={"/Metodos-de-pago"}>Ver Metodos De Pago <i className="fa-solid fa-credit-card"></i></Link>
                </div>
                {/* seccion de textos de los tipos de envios y sucursales */}
                <div className='texts-prod-send'>
                  <li><i className="fa-solid fa-truck-fast"></i> <span>Llega gratis el dia Lunes </span></li>
                  <Link className='texts-prod-send_link' to={"/Envios"} >VER MAS FORMAS DE ENTREGA</Link>
                </div>
                <div className='texts-prod-sucursales'>
                  <li><i className="fa-solid fa-shop"></i> <span>RETIRA GRATIS ENTRE EL MARTES Y EL MIERCOLES EN CORREO O OTROS PUNTOS </span></li>
                  <Link className='texts-prod-sucursales_link' to={"/Sucursales"} >VER EN EL MAPA <i className="fa-solid fa-location-dot"></i></Link>
                </div>
                {/* seccion de cantidades y el contador de productos */}
                <div className='box-card-prod-cantidades'>
                  <p className='box-card-prod-cantidades'>Cantidad :</p>
                  <CountItem stock={stock} />
                </div>
                {/* seccion de colores del producto */}
                <div className='box-card-prod-color'>
                  <p>Color :</p>
                  <button className='btn-color'>{color} </button>
                </div>
                {/* seccion del talle del producto */}
                <div className='box-card-prod-talle'>
                  <p>Talle:</p>
                  <button className='btn-talle'>{talle} </button>
                </div>
                {/* seccion de la categoria */}
                <div className='box-card-prod-categoria'>
                   <p>Categoria: {categoria} </p>
                </div>
                {/* seccion del stock */}
                <div className='box-card-prod-stock'>
                  {stock > 0 ? <p className='stock-disponible'>Stock: Disponible</p> : <p className='stock-nodisponible'>Stock: No Disponible</p> }
                  <p>GUIA DE TALLES AL 95% LE QUEDO COMO ESPERABA</p>
                </div>
                {/* seccion del boton de comprar  */}
                <div className='box-card-prod-btnbuy'>
                  <button className='btn-card-buy'>Agregar al carrito</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default CardDetail