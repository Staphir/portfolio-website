import "./style.scss";
import { NavLink } from "react-router-dom";
import iconCV from '../../assets/icon_cv_2.png';
import iconLinkedin from '../../assets/linkedIn_logo.png'
import iconGithub from '../../assets/github-collab.png'
import iconItchIo from '../../assets/itch-io-logo-clipart-2.png'

function Header() {
    const menuPages = {"Portfolio": "", "À propos": "about", "Contact": "contact"};

    return (
        <header>
            <nav className="menu">
                {Object.keys(menuPages).map((page) => <NavLink key={page} to={menuPages[page]}>{page.toUpperCase()}</NavLink>)}
            </nav>
            <div className="logos-links">
                <a href="https://github.com/staphir">
                    <img className="logo-cv" src={iconCV} alt='Télécharger CV'>{/*ajouter téléchargement CV*/}</img>
                </a>
                <a href="https://linkedin.com/in/maxime-dulieu-830a2b137" target="_blank">
                    <img className="logo-linkedin" src={iconLinkedin} alt='Linkedin'>{/*ajouter téléchargement CV*/}</img>
                </a>
                <a href="https://github.com/staphir" target="_blank">
                    <img className="logo-github" src={iconGithub} alt='Github'>{/*ajouter téléchargement CV*/}</img>
                </a>
                <a href="https://staphir.itch.io/" target="_blank">
                    <img className="logo-itch" src={iconItchIo} alt='Itch.io'>{/*ajouter téléchargement CV*/}</img>
                </a>
            </div>
        </header>
    )
}

export default Header;