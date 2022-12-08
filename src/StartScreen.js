import { useState} from 'react';
import './App.css';

const StartScreen = (props) =>{

    const [numberOfQuotes, setNumberOfQuotes] = useState([]);

    // functions that passes the users answer on submission as a prompt
    const usersChoice = (e) => {
        props.getUsersChoice(e, numberOfQuotes);
        props.startGame(false);
    }

    // Function that set the users choice of 5 or 10 questions
    const handleStartClick = ((e) =>{
        setNumberOfQuotes(e.target.value);
    })

 

        return(
        <div className="main-start-screen-container">
            <div className="start-screen-background">
                <div className="start-screen-container">
                    <section className="start-screen-title"><h2>Welcome to "Who said that?"</h2>
                    <p>Stranger Things Edition!</p>
                    <p>Guess which characer said each quote!</p>
                    </section>
                    <section className="start-screen-footer">
                        <form onSubmit={usersChoice}>
                            <p>Pick how many questions you'd like to answer!</p>
                            <div className="start-input-container">
                                <div className="start-radio-container">
                                    <input type="radio" id="option1" name="questions" onClick={handleStartClick} value={5}></input>
                                    <label htmlFor="option1">5 Questions</label>
                                </div>
                                <div className="start-radio-container">
                                    <input type="radio" id="option2" name="questions" onClick={handleStartClick} value={10}></input>
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