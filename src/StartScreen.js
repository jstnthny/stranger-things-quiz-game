import { useState} from 'react';
import './App.css';

const StartScreen = (props) =>{

    const [numberOfQuotes, setNumberOfQuotes] = useState([]);

    const usersChoice = (e) => {
        props.getUsersChoice(e, numberOfQuotes);
        props.startGame(false);
    }

    const handleStartClick = ((e) =>{
        setNumberOfQuotes(e.target.value);
    })

 

        return(
        <div className="main-end-screen-container">
            {/* <h1>{props.correctAnswer}</h1> */}
            <div className="end-screen-background">
                <div className="end-screen-container">
                    <section className="end-screen-title"><h2>Welcome to "Who said that?"</h2>
                    <p>Stranger Things Edition!</p>
                    <p>Guess which characer said each quote!</p>
                    </section>
                    {/* <section className="end-screen-body"><p>{props.questionsAsked}</p></section> */}
                    <section className="end-screen-footer">
                        <form onSubmit={usersChoice}>
                            <p>Pick how many questions you'd like to answer!</p>
                            <div className="input-container">
                                <div className="radio-container">
                                    <input type="radio" id="option1" name="questions" onClick={handleStartClick} value={4}></input>
                                    <label htmlFor="option1">5 Questions</label>
                                </div>
                                <div className="radio-container">
                                    <input type="radio" id="option2" name="questions" onClick={handleStartClick} value={9}></input>
                                    <label htmlFor="option2">10 Questions</label>
                                </div>
                            </div>
                            <div>
                                <input type="submit" id="submitBtn" value="Start Game"></input>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default StartScreen;