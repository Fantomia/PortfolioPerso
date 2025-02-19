const Card = () => {
    const pictureProfile = "./assets/pp.jpg"
    return (    
        <div className="Card">
            <img src={pictureProfile} alt="profilePicture" />
            <div className='Card__content'>
                <div className='name'>
                    <h2 className='first__name card__name'>Jonathan</h2>
                    <h2 className='last__name'>ANDRIAMIANDRA</h2>
                </div>
                <h3>Développeur Front-End</h3>
                <p>
                Transformer vos idées en réalité, en créant des interfaces modernes et intuitives pour offrir une expérience utilisateur agréable.
                </p>
            </div>
        </div>
    )
}

export default Card