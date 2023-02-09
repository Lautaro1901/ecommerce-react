import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState (1)

    const increase = () => {
        if (count < stock) {
            onAdd(count + 1)
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > 1) {   
            onAdd(count - 1)
            setCount(count - 1)
    }
}

    return (
        <div className='count'>
            <button className='count__decrease' onClick={decrease}>-</button>
            <p className='count__amount'>Cantidad: {count}</p>
            <button className='count__increase' onClick={increase}>+</button>
        </div>
    )
}

export default ItemCount