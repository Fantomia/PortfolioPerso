import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ slides }) => {
    const [indexItem, setIndexItem] = useState(0);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleToggleContent = () => {
        if (screenSize <= 1462) {
            setIsContentVisible((prev) => !prev);
        }
    };
    
    // Ajout de la base URL pour les chemins des images
    const basePath = import.meta.env.BASE_URL + "assets/";

    // Met à jour la taille de l'écran lors du redimensionnement
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setIndexItem((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndexItem((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const currentSlide = slides[indexItem];

    // Sélection de l'image en fonction de la taille de l'écran
    let imageSrc = `${basePath}${currentSlide.coverDesktop}`;
    if (screenSize <= 768) {
        imageSrc = `${basePath}${currentSlide.coverTablet}`;
    }
    if (screenSize <= 480) {
        imageSrc = `${basePath}${currentSlide.coverPhone}`;
    }

    return (
        <section className="carousel__container">
            <h1>MES PROJETS</h1>
            <div className="carousel" onClick={handleToggleContent}>
                <div className="carousel__image">
                    <img src={imageSrc} alt={currentSlide.title} />
                </div>
                <div className={`carousel__content ${isContentVisible || screenSize > 1462 ? "visible" : ""}`}>
                    <p className="carousel__description" dangerouslySetInnerHTML={{ __html: currentSlide.description }} />
                    {currentSlide.techno && (
                        <div className="carousel__techno">
                            <div className="carousel__techno-logos">
                                {currentSlide.techno.map((tech, index) => (
                                    <div key={index} className="carousel__techno-logo">
                                        <img src={`${basePath}${tech.logo1}`} alt="Techno logo" />
                                        {tech.logo2 && <img src={`${basePath}${tech.logo2}`} alt="Techno logo" />}
                                    </div>
                                ))}
                            </div>
                            <p className="carousel__techno-description" dangerouslySetInnerHTML={{ __html: currentSlide.techno[0].objectif }} />
                        </div>
                    )}
                    {currentSlide.github && (
                        <div className="carousel__github">
                            <a href={currentSlide.github} target="_blank" rel="noopener noreferrer">
                                &gt; Visiter mon projet
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {slides.length > 1 && (
                <div className="carousel__controls">
                    <button className="carousel__controls--btn" onClick={handlePrev}>
                        Précédent
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="sharp" strokeLinejoin="sharp" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="carousel__controls--btn" onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="sharp" strokeLinejoin="sharp" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        Suivant
                    </button>
                </div>
            )}
        </section>
    );
};

Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            coverDesktop: PropTypes.string.isRequired,
            coverTablet: PropTypes.string.isRequired,
            coverPhone: PropTypes.string.isRequired,
            description: PropTypes.string,
            techno: PropTypes.arrayOf(
                PropTypes.shape({
                    logo1: PropTypes.string.isRequired,
                    objectif: PropTypes.string.isRequired
                })
            ),
            github: PropTypes.string
        })
    ).isRequired
};

export default Carousel;
