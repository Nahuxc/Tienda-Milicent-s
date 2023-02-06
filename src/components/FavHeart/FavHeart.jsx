import React, { useState } from 'react'
import "./FavHeart.css"

const FavHeart = () => {

    const [fav, setFav] = useState(false) 

    const like = ()=>{
        if(fav === false){
            setFav(true)
            
        }else if( fav === true){
            setFav(false)
        }
    }

  return (
    <div>
        <div onClick={like} className='box-heart'>
        {fav === false ? <div className='box-heart'><i className="fa-solid fa-heart"></i></div> : <div  className='box-heart like'><i className="fa-solid fa-heart"></i></div>}
        </div>
    </div>
  )
}

export default FavHeart