import React, { useState } from 'react';

const CheckoutCard = ({card}) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    card({cardNumber, expiryDate, cvv});    
    };

    return (
        <form className='formTarjeta' onSubmit={handleSubmit}>
            <label className='formTarjeta__label'>Numero de Tarjeta</label>
            <input className='formTarjeta__input'type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

            <label className='formTarjeta__label'>Fecha de vencimiento</label>
            <input className='formTarjeta__input'type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

            <label className='formTarjeta__label'>CVV</label>
            <input className='formTarjeta__input'type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />

            <button className='formTarjeta__btn'type="submit">Verificar Tarjeta</button>
        </form>
    );
};

export default CheckoutCard;