import React from 'react'
import { useEffect, useState } from 'react'
/* llamamos a la api */
import { getProducts } from '../../database/api'
import "./ProductsContainer.css"
import Card from '../Card/Card'


const ProductsContainer = () => {


  const [data, setData] = useState([])

  useEffect(()=>{
    obtenerProductos()
  }, [])

  /* carga los objetos extraidos de la api */
  const obtenerProductos = async ()=>{
    try{
      const datos = await getProducts()
      setData(datos)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <div className='box-text-products'>
        <h2 className='text-h2'>#MILICENT<span>SALE</span></h2>
      </div>
      <div className='box-text-products-init'>
        <h2>LO MAS VENDIDO</h2>
      </div>
      <div className='box-header-products'>
        {/* recorremos los datos para extraerlos por id y mandarlos a la card */}
        {data.map(datos => <Card key={datos.id} {...datos}/>)}
      </div>
    </div>
  )
}

export default ProductsContainer;