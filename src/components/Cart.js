import React from 'react'
import { Link } from 'react-router-dom'
import { useCarro } from './CustomProvider'
import ItemCart from './ItemCart'

const Cart = () => {

  const carrito = useCarro()

  return (
    <div className='carritoGral'> 
      <h1 className='carritoGral__title'>Carrito</h1>
      <ul className='container'>
        {carrito.cart.map((producto,i) => 
          <ItemCart producto={producto} key={i}/>
        )}
      </ul>
        <Link to={"/checkout"} className='carritoGral__link'> <button className='carritoGral__btn'>Checkout</button></Link>
    </div>
  )
}



export default Cart