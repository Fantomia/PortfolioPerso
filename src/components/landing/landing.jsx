import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="Welcome" id="home">
            <h1>B I E N V E N U E</h1>
    
            <div className="contentHome">
                <p>Moi c&#39;est Jonathan, je suis <strong><em>Développeur Web</em></strong> en formation chez OpenClassRooms.</p>
                <p>Je me spécialise dans le développement front-end avec une passion pour la création d&#39;interfaces utilisateur modernes, fluides et dynamiques.</p>
                <p>J&#39;utilise des technologies comme React, JavaScript, HTML5 et CSS3 pour vous offrir une expérience web intuitive et performante.</p>
                <p>Envie de voir mes projets ? <Link to="/#Project">Découvre mes réalisations !</Link></p>
            </div>
        </div>
    );
}

export default Home;
