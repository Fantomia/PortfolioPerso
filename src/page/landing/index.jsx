import Home from "../../components/landing/landing"
import { useState, useEffect } from "react"
import slidesData from '../../data/slide.json'
import Card from '../../components/card/card'
import Carousel from "../../components/carousel/carousel"
import Section from "../../components/section/section"
import Form from '../../components/form/form'

const Landing = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(slidesData);
    }, []);
    return (
        <>
            <div id="Home" className="section"><Home /></div>    
            <div id="About" className="section about">
                <Card />
                <Section />
            </div>
            <div id="Project" className="section">
                {slides.length > 0 ? <Carousel slides={slides} /> : <p>Chargement...</p>}
            </div>
            <div id="Contact" className="section form"><Form /></div>
        </>
    );
}

export default Landing;