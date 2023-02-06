import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsId } from '../../database/api'
import CardDetail from '../CardDetail/CardDetail'



const CardDetailContainer = () => {
  
    const [item, setItem] = useState()

    const {id, nombre} = useParams()


    useEffect(()=>{
        getProductsId(Number(id), nombre).then((resolve)=>{
            setItem(resolve)
        })

    }, [id, nombre])

  return (
    <div>
        <CardDetail {...item} />
    </div>
  )
}

export default CardDetailContainer