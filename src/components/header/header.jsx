import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const logo = `${import.meta.env.BASE_URL}assets/ja.png`;

    useEffect(() => {
        const handleScroll = () => {
            console.log("window.scrollY:", window.scrollY);
            setIsBlurred(window.scrollY > 20);  // Blurring si on dépasse 20px
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            {/* HAMBURGER ICON */}
            <div className="hamburger-lines" onClick={() => setShowNav(prevState => !prevState)}>
                <span className={`line line1 ${showNav ? "open" : ""}`}></span>
                <span className={`line line2 ${showNav ? "open" : ""}`}></span>
                <span className={`line line3 ${showNav ? "open" : ""}`}></span>
            </div>


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
                    <img src={logo} alt="Logo" className="logo-in-nav" />
                    <nav className="nav__links">
                        <Link to="./#Home">Accueil</Link>
                        <Link to="./#About">A Propos</Link>
                        <Link to="./#Project">Projets</Link>
                        <Link to="./#Contact">Contact</Link>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Header;
