import CartWidget from "./CartWidget";

const NavBar = (props) => {
    if (props.isHeader){
        return(
            <nav className="header__nav">
                <a className="header__link" href="#/" >Celulares</a>
                <a className="header__link" href="#/">Accesorios</a>
                <CartWidget/>
            </nav>
        )
    } else{
        return(
            <nav>
                <a className="header__link" href={props.hrefLinkFooter1}>{props.textLinkFooter1}</a>
                <a className="header__link" href={props.hrefLinkFooter2}>{props.textLinkFooter2}</a>
            </nav>
        )
    }
}

export default NavBar;