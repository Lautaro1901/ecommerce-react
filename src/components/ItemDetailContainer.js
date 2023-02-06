import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { SpinningCircles } from 'react-loading-icons'
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [load, setLoad] = useState (false)
    const [producto, setProducto] = useState ({})
    
    useEffect(() => {
        const productoCollection = collection(db, "productos")
        getDoc(doc(productoCollection, id)).then((doc) => {
            if (doc.exists()) {
                setProducto({...doc.data(), id: doc.id})
                setLoad(true)
            }
        }).catch((error) => {
            console.log("Error cargando el documento", error);
        });
    },[])

    return (
        <div>
            {!load ? <SpinningCircles /> : null}
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
