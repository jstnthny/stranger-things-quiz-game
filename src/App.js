import { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question.js';
import Answer from './Answer.js';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState([]);
  // const [randomFinalCharacter, setRandomFinalCharacter] = useState();
  const [randomCharacterOne, setRandomCharacterOne] = useState();
  const [randomCharacterTwo, setRandomCharacterTwo] = useState();
  const [scoreboard, setScoreboard] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [userResult, setUserResult] = useState([]);
  let usersAnswer;



 


  // STRANGER THINGS API
   useEffect(() => {
    axios({
      url: "https://strangerthings-quotes.vercel.app/api/quotes/1",
    }).then((res) => {
      res.data.map((obj) =>{
      console.log(obj);
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
      console.log(newArray);
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
      console.log(anotherNewArray);
    }
    getRandomCharacter(randomCharacters);

    return obj;
      });
    
    })
  }, [questionsAsked])


  const getUserAnswer = (e, userChoice) =>{
    e.preventDefault(); 
    usersAnswer = userChoice
    gameLogic(usersAnswer);
  }

  const getBool = (closeModalPlease) =>{
    setOpenModal(closeModalPlease);
    setQuestionsAsked(questionsAsked + 1);
  }

  const [openModal, setOpenModal] = useState(false)

  const gameLogic = (usersAnswer) =>{
    console.log(usersAnswer);

    if(usersAnswer === author){
      console.log("correct!");
      setScoreboard(scoreboard + 1);
      setUserResult("You were right!")
    } else {
      setUserResult("Sorry not quite right!")
    }
    setOpenModal(true);

  }

  console.log(questionsAsked);
  console.log(`Score ${scoreboard}`);



  
 

  // Modal Logic to show correct answer
  //Create Modal component
  // Have it render after a quote is gussed
  // When user clicks [x] on modal we increment our questionAsked state which causes a re-render
  // Thus calling the API Again and then also ressettingg our 
  // setShowUserAnswer State back to a empty string

  return (
    <div className="app-container">
      <div className="game-container">
        <p className="question-counter">{`Questions Asked: ${questionsAsked}`}</p>
        <p className="scoreboard">{`Score: ${scoreboard}`}</p>
        {openModal && <Answer correctAnswer={author} closeModal={getBool} rightOrWrong={userResult}/>}
        <Question 
            quote={quotes}
            character={author}
            randomCharacterOne={randomCharacterOne}
            randomCharacterTwo={randomCharacterTwo}
            getUserPick={getUserAnswer}
            />
      </div>
      <footer></footer>
    </div>
  );


}

export default App;



//------------------------------------------------------------------// 
  // Psuedo Code

  // App Component

  // Create state items to hold quote & author
  // Create state item for scoreboard
  // Create an array with some random characters to use as the other options to guess
  // Create a getRandomCharacter function that we'll be using to pick a random character from our array as our second option to guess for the quote
  // Create a questionsAsked state that we will be updating whenever a question is answered we will also be passing into our dependency array so we can call the api and
  // get a new quote whenever a question is answered

  // When user presses start button, call API  ( url: "https://strangerthings-quotes.vercel.app/api/quotes/1) with useEffect
      // <Question quote={question.quote}
      //           optionOne={question.author}
      //           optionTwo={getRandomCharacter} 
      // />

  // Whenever a question is answered (when one of the buttons is pressed) we update a state that we pass into our dependency array so can get a new quote from the api
  // We also update our scoreboard if the user gets a question correct
  // Update questionsAsked state by 1 whenever a questions is answered & when questionsAsked = 10 the game is over and the user will be given a option to play again (by pressing a button)
    // This will then reset our scoreboard state and questionsAsked state back to 0 

  // Question Component
    //Create question component that we will importing into our App.js to create each question
    
    // return(
    //    <div>
    //      <h2>{props.quote}<h2> 
    //      <button>{props.author}</button>
    //      <button>{randomCharacter[randomNumber]}</button>
    //    </div>
    // )
