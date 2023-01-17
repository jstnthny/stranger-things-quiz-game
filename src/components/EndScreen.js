import '../App.css';

// Function closes modal if user presses on "Play Again"
const EndScreen = (props) =>{

    const closeHandler = () =>{
    props.closeFinalScore(false);
}

    
    return(
        <div className="main-end-screen-container">
            <div className="end-screen-background">
                <div className="end-screen-container">
                    <section className="end-screen-title">
                        <h2>{`Your total score was ${props.score}`}</h2>
                    </section>
                    <section className="end-screen-footer">
                        <button onClick={closeHandler}>Play again?</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default EndScreen;