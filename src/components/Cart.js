import React from 'react'
import { Link } from 'react-router-dom'
import { useCarro } from './CustomProvider'
import ItemCart from './ItemCart'

const Cart = () => {

  const carrito = useCarro()

  return (
    <div> 
      <h1>Carrito</h1>
      <ul className='container'>
        {carrito.cart.map((producto,i) => 
          <ItemCart producto={producto} key={i}/>
        )}
      </ul>
      <Link to={"/checkout"}>Checkout</Link>  
    </div>
  )
}

export default Cart