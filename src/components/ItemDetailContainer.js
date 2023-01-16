import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { SpinningCircles } from 'react-loading-icons'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [load, setLoad] = useState (false)
    const [producto, setProducto] = useState ({})
    
    
    useEffect(() => {
        const pedidoIndv = fetch(`https://api.escuelajs.co/api/v1/products/${id}`)

        pedidoIndv.then((respuesta) => {
            const productos = respuesta.json()
            return productos
        })
        .then((producto) => {
            setProducto(producto)
            setLoad(true)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    return (
        <div>
            {!load ? <SpinningCircles /> : null}
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
