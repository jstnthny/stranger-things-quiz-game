import { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './components/Question.js';
import Answer from './components/Answer.js';
import StartScreen from './components/StartScreen.js';
import EndScreen from './components/EndScreen.js';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState([]);
  const [randomCharacterOne, setRandomCharacterOne] = useState();
  const [randomCharacterTwo, setRandomCharacterTwo] = useState();
  const [scoreboard, setScoreboard] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState(1);
  const [userResult, setUserResult] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [numOfQuestions, setNumOfQuestions] = useState([]);
  const [newGame, setNewGame] = useState(true);
  let usersAnswer;




   useEffect(() => {
    axios({
      url: "https://strangerthings-quotes.vercel.app/api/quotes/1",
    }).then((res) => {
      res.data.map((obj) =>{
        
      setQuotes(obj.quote);
      setAuthor(obj.author);

      // Function to grab a random character for our second option
      const randomCharacters = ["Eleven", "Robin Buckley", "Max Mayfield", "Mike Wheeler", "Joyce Byers", "Jim Hopper",
                                "Dustin Henderson", "Lucas Sinclair", "Jonathan Byers", "Steve Harrington", "Erica Sinclair",
                                 "Mr. Clarke", "Sam Owens", "Kali Prasad","Keith","Murray Bauman"];
      const getRandomCharacter = (randomCharacter) => {
          // Filter to remove the orignal author of the quote from the array so we don't get a duplicate
         const newArray = randomCharacter.filter((character) =>{
          return character !== obj.author
      })
      // Setting our randndom character state with the help of a random number generator
      let secondCharacter = newArray[Math.floor(Math.random() * newArray.length)]
      setRandomCharacterOne(secondCharacter)
      getAnotherRandomCharacter(newArray, secondCharacter);
    }

    // Function to select second random character //
    const getAnotherRandomCharacter = (randomCharacter, characterToRemove) => {
          // Filter from array without og author & the first random character selected
         const anotherNewArray = randomCharacter.filter((character) =>{
         return character !== characterToRemove
      })
      setRandomCharacterTwo(anotherNewArray[Math.floor(Math.random() * anotherNewArray.length)])
    }
    getRandomCharacter(randomCharacters);

    return obj; 

      });
    
    })
  }, [questionsAsked])

  //Function that sets the number of questions for the game
  const getNumberOfQuestions = (e, numOfQuestions) =>{
    e.preventDefault();
    setNumOfQuestions(numOfQuestions);

  }

  const startGame = (startGameBool) =>{
    setNewGame(startGameBool);
  }


  // Function thats get the users answer from the question component
  const getUserAnswer = (e, userChoice) =>{
    e.preventDefault(); 
    usersAnswer = userChoice
    gameLogic(usersAnswer);
  }

  // Function that passes boolean to close modal after user answers question
  // also increment questionsAsked and check if 10 questions have been asked
  const closeModal= (modalBool) =>{
    setOpenModal(modalBool);
    setQuestionsAsked(questionsAsked + 1);
      if(questionsAsked >= numOfQuestions){
      setShowTotalScore(true);
      setNewGame(true);
    }
  }

// Game logic function that checks if the players answer was correct + increments score result and closes modal
  const gameLogic = (usersAnswer) =>{

    if(usersAnswer === author){
      setScoreboard(scoreboard + 1);
      setUserResult(true)
    } else if (usersAnswer !== author) {
      setUserResult(false)
    }
    setOpenModal(true);
  }

// Function close end screen modal + reset scoreboard stats also
  const closeEndScreen = (endGameBool) =>{
    setShowTotalScore(endGameBool)
    setScoreboard(0);
    setQuestionsAsked(1);
    setNumOfQuestions(0);
  }


  return (
    <div className="screen-container">
      <div className="app-container wrapper">
        {showTotalScore && <EndScreen score={scoreboard} questionsAsked={questionsAsked} closeFinalScore={closeEndScreen}/>}
        {newGame &&<StartScreen getUsersChoice={getNumberOfQuestions} startGame={startGame}/>}
        <div className={`game-container ${newGame ? "hide" : "show"}`}>
          <p className="question-counter">{`Questions Asked: ${questionsAsked}`}</p>
          <p className="scoreboard">{`Score: ${scoreboard}`}</p>
          {openModal && <Answer correctAnswer={author} closeModal={closeModal} rightOrWrong={userResult}/>}
          <Question 
              quote={quotes}
              character={author}
              randomCharacterOne={randomCharacterOne}
              randomCharacterTwo={randomCharacterTwo}
              getUserPick={getUserAnswer}
              />
        </div>
        <footer>Built by Justin Abante @ Juno College</footer>
      </div>
    </div>
   
  );


}

export default App;


