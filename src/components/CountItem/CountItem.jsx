import React, { useState } from 'react'
import "./CountItem.css"


const CountItem = ({stock, initial=1}) => {
    
    const [count, setCount] = useState(parseInt(initial))

    const aument = ()=>{

        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrement = ()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }

  return (
    <div>
        <div className='counter'>
            <button onClick={aument} className='btn-aument'>+</button>
            <p className='count'> {count} </p>
            <button onClick={decrement} className='btn-decrement'>-</button>
        </div>
    </div>
  )
}

export default CountItem