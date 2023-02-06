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
        <form onSubmit={handleSubmit}>
            <label>Card Number</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

            <label>Expiry Date</label>
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

            <label>CVV</label>
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />

            <button type="submit">Verificar Tarjeta</button>
        </form>
    );
};

export default CheckoutCard;