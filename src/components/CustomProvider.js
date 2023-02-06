import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


const context = createContext ()
const Provider = context.Provider

export const useCarro = () => {
    return useContext (context)
}

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad) => {
        const aux = [...cart] 
        if(isInCart(item)) {
            const index = aux.findIndex((element) => element.item.id === item.id)
            aux[index].cantidad = cantidad
            setCart(aux)
        }else {
            aux.push({item, cantidad}) 
            setCart(aux)
        }
    }

    const removeItem = (item) => {
        if(!isInCart(item)) 
        return
        const aux = [...cart]
        const index = aux.findIndex((element) => element.item.id === item.id)
        aux.splice(index, 1)
        setCart(aux)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.some((element) => element.item.id === item.id)
    }

    const totalProducts = () => {
        let total = 0
        cart.forEach((producto) => {
            total += producto.cantidad * producto.item.price
        })
        return total
    }

    const contextValue = {
        cart : cart,
        addItem : addItem,
        removeItem : removeItem,
        totalProducts : totalProducts,
        clearCart : clearCart,
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider