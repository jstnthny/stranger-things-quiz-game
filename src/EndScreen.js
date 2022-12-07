import './App.css';

const EndScreen = (props) =>{

    const closeHandler = () =>{
    props.closeFinalScore(false);
}

    
    return(
        <div className="main-end-screen-container">
            {/* <h1>{props.correctAnswer}</h1> */}
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