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
        if (count > 0) {   
            onAdd(count - 1)
            setCount(count - 1)
    }
}

    return (
        <div>
            <button onClick={decrease}>-</button>
            <p>Cantidad: {count}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default ItemCount