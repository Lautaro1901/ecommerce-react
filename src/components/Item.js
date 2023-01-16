import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
            <article className="card" key={producto.id}>
                <img src={producto.images} alt="" className="card__img" />
                <h2 className="card__title">{producto.title}</h2>
                <p className="card__description">{producto.description}</p>
                <p className="card__price">{"$" + producto.price}</p>
                <Link className="card__btn" to={"/product/" + producto.id}>More</Link>
            </article>
    )
}

export default Item