import React from 'react'
import { useCarro } from './CustomProvider'


const ItemCart = ({producto}) => {
    const {removeItem} = useCarro()
    const eliminarCarrito = () => {
        removeItem(producto.item)
    }

    return (
        <li className="cart">
                <img src={producto.item.image} alt="" className="cart__img" />
                <div className='cart__container'>
                    <h2 className="cart__title">{producto.item.title}</h2>
                    <p className="cart__description">{producto.item.description}</p>
                    <p className="cart__price">{"Price: $" + producto.item.price}</p>
                    <p className="cart__cantidad">{"Cantidad: " + producto.cantidad}</p>
                    <p className="cart__total">{"Total: $" + producto.item.price * producto.cantidad}</p>
                    <button className="cart__btn" onClick={eliminarCarrito}>Eliminar del Carrito</button>
                </div>
        </li>
    )
}

export default ItemCart