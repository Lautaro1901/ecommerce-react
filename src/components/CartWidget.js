import { NavLink } from "react-router-dom"
import { useCarro } from "./CustomProvider"

const CartWidget = () => { 

    const carrito = useCarro()

    return (
        <NavLink to="/cart">
            <button className="cartshopping__btn">
                <div className='cartshopping'>
                    <div className='cartshopping__count'>{carrito.cart.length}</div>
                    <div><span className="material-icons">shopping_cart</span></div>
                </div>
            </button>
        </NavLink>
    )
}

export default CartWidget