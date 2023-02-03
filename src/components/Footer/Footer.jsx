import React from 'react'
import logoNotback from "../../assets/img/logoNotback.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='content-footer'>
                <div className='footer-text-box'>
                    <h2>MILICENT´S INFO</h2>
                    <p className='text'>QUIENES SOMOS PROGRAMA AFILIADOS BLOGGER DE MODA RESPONSABILIDAD SOCIAL</p>
                </div>
                <div className='footer-text-box'>
                    <h2>AYUDA Y APOYO</h2>
                    <p className='text'>INFORMACION DE ENVIO DEVOLUCION COMO REALIZAR EL PEDIDO RETIRAR. GUIA DE TALLES MILICENT´S VIP</p>
                </div>
                <div className='footer-text-box'>
                    <h2>SERVICIO AL CLIENTE</h2>
                    <p><i className="fa-solid fa-phone"></i> Contactenos: 2345-6789</p>
                    <p><i className="fa-solid fa-credit-card"></i> Formas de pago</p>
                    <p><i className="fa-solid fa-location-dot"></i> Locales</p>
                </div>
                <div className='footer-text-box'>
                    <h2>ENCUENTRANOS EN:</h2>
                    <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                    <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                    <p><i className="fa-brands fa-twitter"></i> Twitter</p>
                    <p><i className="fa-brands fa-pinterest"></i> Pitenrest</p>
                </div>
            </div>
            <div className='content-subfooter'>
                    <div className='box-methods-pay'>
                    <h2>ACEPTAMOS:</h2>
                        <img src="https://static.wixstatic.com/media/00d69d_3abea833f76f4b2d9956b1593661c943~mv2.png/v1/fill/w_560,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/formas-pago-2.png" alt="metodos-de-pago" />
                    </div>
                    <div className='box-authors'>
                        <div className='img-logo'>
                            <img className='img-logo' src={logoNotback} alt="logo-milicent´s" />
                        </div>
                        <div>
                            <p>© MILICENT´S Desing: 
                                Nahuel Alexander Coronel
                                Julieta Agostina Arza </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer