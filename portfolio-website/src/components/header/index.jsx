import "./style.scss";
import { NavLink } from "react-router-dom";
import iconCV from '../../assets/icon_cv.png';

function Header() {
    const menuPages = {"Portfolio": "", "À propos": "about", "Contact": "contact"};

    return (
        <header>
            <nav className="menu">
                {Object.keys(menuPages).map((page) => <NavLink key={page} to={menuPages[page]}>{page.toUpperCase()}</NavLink>)}
            </nav>
            <img className="logo-cv" src={iconCV} alt='Télécharger CV'>{/*ajouter téléchargement CV*/}</img>
        </header>
    )
}

export default Header;