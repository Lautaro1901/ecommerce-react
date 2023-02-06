import React from 'react'
import { useCarro } from './CustomProvider'


const ItemCart = ({producto}) => {
    const {removeItem} = useCarro()
    const eliminarCarrito = () => {
        removeItem(producto.item)
    }

    return (
        <li className="card">
            <img src={producto.item.image} alt="" className="card__img" />
            <h2 className="card__title">{producto.item.title}</h2>
            <p className="card__description">{producto.item.description}</p>
            <p className="card__price">{"Price: $" + producto.item.price}</p>
            <p className="card__cantidad">{"Cantidad: " + producto.cantidad}</p>
            <p className="card__total">{"Total: $" + producto.item.price * producto.cantidad}</p>
            <button className="detail__btn" onClick={eliminarCarrito}>Eliminar</button>
        </li>
    )
}

export default ItemCart