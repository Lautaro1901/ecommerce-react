import React from 'react'
import { useState } from 'react'
import { useCarro } from './CustomProvider'
import ItemCount from './ItemCount'


const ItemDetail = ({producto, images, description, title, stock}) => {

    const [count, setCount] = useState(1)

    const onAdd = (params) => {
        setCount(params)
    }

    const carrito = useCarro()

    const agregarAlCarro = () => {
        carrito.addItem(producto, count)
    }

    return (
            <div className="detail" key={producto.id}>
                <img src={producto.image} alt="" className="detail__img" />
                <div className='detail__container'>                    
                    <h2 className="detail__title">{producto.title}</h2>
                    <p className="detail__description">{producto.description}</p>
                    <p className="detail__price">{"Price: $" + producto.price}</p>
                    <p className="detail__stock">{"Stock: " + producto.stock}</p>
                    <button className="detail__btn" onClick={agregarAlCarro}>Confirmar</button>
                    <ItemCount stock={producto.stock} onAdd={onAdd}/>
                </div>
            </div>
    )
}

export default ItemDetail