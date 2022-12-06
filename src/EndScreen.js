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
                    <section className="end-screen-title"><h1>{`Your total score was ${props.score}`}</h1>
                    </section>
                    {/* <section className="end-screen-body"><p>{props.questionsAsked}</p></section> */}
                    <section className="end-screen-footer"><button onClick={closeHandler}>New Game</button></section>
                </div>
            </div>
        </div>
    )
}

export default EndScreen;