import NavBar from "./NavBar"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__nav">Copyright &copy; 2022</p>
            <NavBar
            textLinkFooter1="Instragram"
            hrefLinkFooter1="https://www.instagram.com/"

            textLinkFooter2="Facebook"
            hrefLinkFooter2="https://www.facebook.com/"
            />
        </footer>
    )
}

export default Footer;