import NavBar from './NavBar'

const Header = () => {
    const isHeader = true
    
    return (
        <header className="header">
            <h1 className="headear__title">Cellmondo</h1>
            <NavBar isHeader={isHeader}/>
        </header>
    )
}

export default Header;