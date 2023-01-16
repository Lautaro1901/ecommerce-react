import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    if (props.isHeader){
        return(
            <nav className="header__nav">
                <Link to={"/products"} className="header__link">All Products</Link>
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <Link to={"/categories/clothes"}>Clothes</Link>
                        <Link to={"/categories/electronics"}>Electronics</Link>
                        <Link to={"/categories/shoes"}>Shoes</Link>   
                        <Link to={"/categories/furniture"}>Furniture</Link>   
                    </div>
                </div>
                <CartWidget/>
            </nav>
        )
    } else{
        return(
            <nav>
                <Link to={"https://www.instagram.com/"} className="header__link" href={props.hrefLinkFooter1}>{props.textLinkFooter1}</Link>
                <Link className="header__link" href={props.hrefLinkFooter2}>{props.textLinkFooter2}</Link>
            </nav>
        )
    }
}

export default NavBar;