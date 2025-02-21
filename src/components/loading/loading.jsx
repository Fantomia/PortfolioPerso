const Loading = () => {
    const logo = `${import.meta.env.BASE_URL}assets/ja.png`;
    return (
        <>
            <div className="loader">
                <div className="loader__container">
                    <img src={logo} alt="logo" className="loader__logo"/>
                    <div className="loader__name">
                        <h2 className="loader__firstName">Jonathan</h2>
                        <h2 className="loader__lastName">ANDRIAMIANDRA</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading