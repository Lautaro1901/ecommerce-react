import React from 'react'

const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
            <div className="detail" key={producto.id}>
                <img src={producto.images} alt="" className="detail__img" />
                <div className='detail__container'>                    
                    <h2 className="detail__title">{producto.title}</h2>
                    <p className="detail__description">{producto.description}</p>
                    <p className="detail__price">{"Price: $" + producto.price}</p>
                    <button className="detail__btn">Add to cart</button>
                </div>
            </div>
    )
}

export default ItemDetail