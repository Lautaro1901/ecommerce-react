import React from 'react'
import CheckoutCard from './CheckoutCard'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useCarro } from './CustomProvider';



const Checkout = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');

    const [card , setCard] = useState({});

    const carrito = useCarro();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || phone === '' || address === '' || zip === '') {
            alert('Todos los campos son obligatorios');
            return;
        } 

        if (!carrito.cart.length > 0) {
            alert('El carrito esta vacio');
            return;
        }

        const order = {
            buyer: {name, email, phone, address, zip},
            items: carrito.cart,
            date: serverTimestamp(),
            total: carrito.totalProducts(),
            card: card
        };
        console.log(order);
        addDoc(collection(db, "orders"), order) 
        .then((docRef) => {
            //Alerta para el usuario que muestre un codigo de seguimiento de la orden
            carrito.clearCart();
            navigate('/');
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }
        );
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Telefono</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label>Direccion</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>Codigo Postal</label>
                <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
                <button type="submit">Confirmar</button>
            </form>
            <CheckoutCard card={setCard}/>
        </div>
    )
}

export default Checkout