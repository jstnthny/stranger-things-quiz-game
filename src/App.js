// import { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';

function App() {

  // const [quotes, setQuotes] = useState([]);
  // const [author, setAuthor] = useState([]);
  // STRANGER THINGS API
  //  useEffect(() => {
  //   axios({
  //     url: "https://strangerthings-quotes.vercel.app/api/quotes/5",
  //   }).then((res) => {
  //     res.data.map((obj) =>{
  //     console.log(obj);
  //     quotes.push(obj.quote);
  //     });
  //   })
  // }, [])

  // console.log(quotes);

  return (
    <div className="App">
      <h1>Main Branch</h1>
    </div>
  );


}

export default App;


// Psuedo Code

//------------------------------------------------------------------// 

// App Component
// Create state items to hold quotes(array) & authors(array)
// Create an arary with some random chracters to use as the other 2 options to guess
// Create state item for scoreboard

// When user presses start button, call API with 10 quotes
// Store quotes into quotes array & authors into authors array

// Create for loop that will run 10 times (because each game will only consist of 10 quotes)
  // Create first question
  // get first objects quote & author
  // create 3 buttons (possible authors of quote) one will be the correct answer for the quote and then 2 more authors will be randomly chosen 
  // from the authors array

  // display quote with selections of authors for the user
    // if user selects correct author(character) then update stateValue of score +1

  // then display next quote