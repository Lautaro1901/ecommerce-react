import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import { SpinningCircles } from 'react-loading-icons'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ItemListContainer = () => {
    
    const [load, setLoad] = useState (false)
    const [productos, setProductos] = useState ([])

    const params = useParams()
    const location = useLocation().pathname

    const obtenerUrl = () => {
        
        if( location === "/"){
            return "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
        }
        
        if( location === "/products"){
            return "https://api.escuelajs.co/api/v1/products"
        }
        
        if( location.startsWith('/categories/')){
            switch(params.categoria){
                case "clothes" : return "https://api.escuelajs.co/api/v1/products/?categoryId=1"
                case "electronics" : return "https://api.escuelajs.co/api/v1/products/?categoryId=2"
                case "furniture" : return "https://api.escuelajs.co/api/v1/products/?categoryId=3"
                case "shoes" : return "https://api.escuelajs.co/api/v1/products/?categoryId=4"
                default : return ""
            }
        }
    }


    useEffect (() => {

        const pedido = fetch(obtenerUrl())

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
    },[params])

    return (
        <div>
            {!load ? <SpinningCircles /> : null}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;   