const Form = () => {
    return (
        <div className="section" id="Contact">
            
            <div className="Contact" >
                <h1>Contactez-moi</h1>
                <p>Vous avez une question ou un projet à me proposer ? N&#39;hésitez pas à remplir le formulaire ci-dessous !</p>
                
                <form className="contact-form">
                    <div className="group1">
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" name="name" placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="surname">Prénom</label>
                            <input type="text" id="surname" name="surname" placeholder="Votre prénom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Nom de la société</label>
                            <input type="text" id="company" name="company" placeholder="Nom de la société" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Votre email" required />
                        </div>
                    </div>
                    <div className="group2">
                        <div className="form-group .message">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
