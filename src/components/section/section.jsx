import { FaGamepad, FaMusic, FaFlag } from 'react-icons/fa'; // Exemple d'import d'icônes

const Section = () => {
    return (
        <>  
            <div className="section__content">
                <h1 className="Title">A Propos</h1>
                <div className='section__text'>
                    <div className='passion'>
                        <h2>Mes passions</h2>
                        <div className='content__container'>
                            <div className="content__desc">
                                <div className="icon">
                                    <FaFlag size={30} />
                                    <h3>La culture coréenne</h3>
                                </div>
                                <div className='content__char'>     
                                    <p>J&#39;ai un grand respect pour les valeurs asiatiques, l&#39;innovation et la pop culture coréenne. Cela me motive à repousser mes limites, que ce soit dans le développement ou dans la vie personnelle.</p>
                                </div>
                            </div>   
                            <div className="content__desc">
                                <div className="icon">
                                    <FaMusic size={30} />
                                    <h3>La musique</h3>
                                </div>
                                <div className='content__char'>
                                    <p>
                                        Elle me permet de rester concentré et inspiré. C&#39;est ma source d&#39;énergie et de créativité dans tout ce que j&#39;entreprends, y compris dans le développement de projets web.
                                        Une passion qui m&#39;a permis d&#39;être Chef de Choeur d&#39;un groupe d&#39;une cinquantaine de jeune depuis 13 ans.
                                    </p>
                                </div>
                            </div>
                            <div className="content__desc">
                                <div className="icon">
                                    <FaGamepad size={30} />
                                    <h3>Les jeux vidéo</h3>
                                </div>
                                <div className='content__char'>
                                    <p>
                                        Un excellent moyen pour me surpasser, en me défiant dans des univers où stratégie et réflexion sont essentielles. Cette passion me pousse également à aborder le développement sous un angle ludique et stimulant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__desc work">
                        <h2>Mon approche</h2>
                        <p>   
                            Je suis convaincu que le travail d&#39;équipe et l&#39;harmonie entre les individus créent les meilleures dynamiques. En tant que chef de choeur, je m&#39;efforce de rassembler les talents, tout en créant un environnement où chacun peut s&#39;épanouir et contribuer à une cause commune. Cette approche collaborative, je la transpose également dans mon travail de développeur, où chaque projet est une composition, nécessitant une synergie entre l&#39;idée et l&#39;exécution.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;
