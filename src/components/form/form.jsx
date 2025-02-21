import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Form = () => {
    return (
        <div className="section" id="Contact">
            
            <div className="Contact" >
                <h1>Contactez-moi</h1>
                <p>Vous avez une question ou un projet à me proposer ? N&#39;hésitez pas à remplir le formulaire ci-dessous !</p>
                
                {/* Formulaire de contact */}
                <form className="contact__form" action="https://formspree.io/f/mgvodkkv" method="POST">
                    <div className='form'>
                        <div className="form__info--names">
                            <div className="form__group">
                                <input type="text" id="name" name="name" placeholder=" " required />
                                <label htmlFor="name">Nom</label>
                            </div>

                            <div className="form__group">  
                                <input type="text" id="surname" name="surname" placeholder=" "required />
                                <label htmlFor="surname">Prénom</label>
                            </div>
                        </div>
                        <div className="form__info--formal">
                            <div className="form__group">
                                <input type="text" id="company" name="company" placeholder=" " />
                                <label htmlFor="company">Nom de la société</label>
                            </div>
                            
                            <div className="form__group">
                                <input type="email" id="email" name="email" required placeholder=" " />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <div className="form__group message">
                            <textarea id="message" name="message" rows="5" placeholder=" " required></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="submit-btn">Envoyer</button>
                    </div>
                </form>

                {/* Section Réseaux sociaux */}
                <div className="social__media">
                    <h2>Retrouvez-moi sur les réseaux sociaux</h2>
                    <div className='social__logo'>
                            <a href="https://github.com/Fantomia" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/jonathan-andriamiandra/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
