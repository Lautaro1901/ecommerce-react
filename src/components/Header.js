import { Link } from 'react-router-dom';
import NavBar from './NavBar'

const Header = () => {
    const isHeader = true
    
    return (
        <header className="header">
            <Link to={"/"} className="header__title">
                <h1>Market</h1>
            </Link>
            <NavBar isHeader={isHeader}/>
        </header>
    )
}

export default Header;