import React from 'react'
import Card from '../../Card/Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./HomeProd.css"

const HomeProd = () => {

  const dataBase = [
    {
        id: 1,
        marca: "Milicent´s Century",
        nombre: "Buzo Milicent´s",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/214/products/saddie-quemado1-8117ee915dcabafb6816642902310713-640-0.webp",
        precio: 10250,
        descripcion : "descripcion del buzo",
        stock: 16,
        categoria: "Urbano",
        tipo: "Buzo"
    },
    {
        id: 3,
        marca: "Milicent´s Century",
        nombre: "Buzo Milicent´s",
        img: "https://www.pimps.cl/wp-content/uploads/2022/05/NBAHD62201-BLK-2.png",
        precio: 14000,
        descripcion : "descripcion del buzo",
        stock: 26,
        categoria: "Sport",
        tipo: "Buzo"
    },
    {
        id: 11,
        marca: "Milicent´s Century",
        nombre: "Pantalon Milicent´s",
        img: "https://ae03.alicdn.com/kf/H78814a2fdcd248389327908bb315b0d8T.jpg",
        precio: 7400,
        descripcion : "descripcion del buzo",
        stock: 34,
        categoria: "Urbano",
        tipo: "Pantalon"
    },
    {
        id: 12,
        marca: "Milicent´s Century",
        nombre: "Pantalon Urbano Cargo Milicent´s",
        img: "https://ae01.alicdn.com/kf/HTB1itN2U3HqK1RjSZFkq6x.WFXaq.jpg",
        precio: 12600,
        descripcion : "descripcion del buzo",
        stock: 27,
        categoria: "Urbano",
        tipo: "Pantalon"
    }
  ]

  const [data, setData] = useState([])

  /* carga los objetos extraidos de la api y los manda a data*/
  useEffect(()=>{
    setData(dataBase)
  }, [])


  return (
    <div className='background-products'>
      <div className='box-text-products'>
        <h2 className='text-h2'>#MILICENT<span>SALE</span></h2>
      </div>
      <div className='box-text-products-init'>
        <h2>LO MAS VENDIDO</h2>
      </div>
      <div className='content-products'>
      {data.map(datos => <Card key={datos.id} {...datos}/>)}
      </div>
      <div className='box-btn'>
        <Link to={"/productos"}><button className='btn-vermas'>VER MAS</button></Link>
      </div>
    </div>
  )
}

export default HomeProd