import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import { SpinningCircles } from 'react-loading-icons'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {

    const [load, setLoad] = useState (false)
    const [productos, setProductos] = useState ([])

    const params = useParams()

    useEffect (() => {
        console.log (params)
        const productosCollection = collection(db, "productos")

        getDocs(!params.hasOwnProperty ('categoria') ? productosCollection : query(productosCollection, where("category", "==", params.categoria))).then ((consulta) => {
            const productos = consulta.docs.map ((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setProductos(productos)
            setLoad(true)
        })
        .catch ((error) => {
            console.log ("Error searching products", error)
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