import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { SpinningCircles } from 'react-loading-icons'

const ItemListContainer = () => {
    
    const [load, setLoad] = useState (false)
    const [productos, setProductos] = useState ([])

    const params = useParams()

    useEffect (() => {

        const pedido = fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8')

        pedido.then((respuesta) => {
            const productos = respuesta.json()
            return productos
        })
        .then((productos) => {
            setProductos(productos)
            setLoad(true)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    return (
        <div>
            {!load ? <SpinningCircles /> : null}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;   