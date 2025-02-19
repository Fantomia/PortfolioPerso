import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const logo = "/assets/ja.png";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsBlurred(true); // Appliquer le flou si on a scrollé de plus de 50px
            } else {
                setIsBlurred(false); // Enlever le flou quand on revient en haut
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Nettoyage de l'écouteur
    }, []);

    return (
        <header className="header">
            {/* HAMBURGER ICON */}
            <svg 
                id="hamburger" 
                className={`Header__toggle-svg ${showNav ? "open" : ""}`} 
                viewBox="0 0 60 40" 
                onClick={() => setShowNav(true)} 
            >
                <g stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path id="top-line" d="M10,10 L50,10 Z"></path>
                    <path id="middle-line" d="M10,20 L50,20 Z"></path>
                    <path id="bottom-line" d="M10,30 L50,30 Z"></path>
                </g>
            </svg>

            {/* TITRE */}
            <div className={`title__section ${isBlurred ? "blurred" : ""}`}>
                <img src={logo} alt="logo" className="logo"/>
                <div className="Title__name">
                    <h2 className="first__name">Jonathan</h2>
                    <h2 className="last__name">ANDRIAMIANDRA</h2>
                </div>
            </div>

            {/* NAVIGATION */}
            <nav 
                className={`nav ${showNav ? 'nav--visible' : ""}`}
                onMouseLeave={() => setShowNav(false)}
            >
                <div className="nav__menu">
                    <img src={logo} alt="Logo" />
                    <nav className="nav__links">
                        <Link to="/#Home">Accueil</Link>
                        <Link to="/#About">A Propos</Link>
                        <Link to="/#Project">Projets</Link>
                        <Link to="/#Contact">Contact</Link>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Header;
