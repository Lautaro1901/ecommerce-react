import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    if (props.isHeader){
        return(
            <nav className="header__nav">
                <Link to={"/products"} className="header__link" href="#/" >All Products</Link>
                <Link to={"/categories"} className="header__link" href="#/">Categories</Link>
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