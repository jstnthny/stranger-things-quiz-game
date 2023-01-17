import { useState, useEffect } from 'react';
import './App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Question = (props) => {


   const [userAnswer, setUserAnswer] = useState('')
   const [checkedOne, setCheckedOne] = useState(false);
   const [checkedTwo, setCheckedTwo] = useState(false);
   const [checkedThree, setCheckedThree] = useState(false);
   const [newArray, setNewArray] = useState([]);
   const [updateState, setUpdateState] = useState(true);
   const submitHandler = (e) =>{
    e.preventDefault();
    props.getUserPick(e,userAnswer);
    resetButtons();
    setUserAnswer("");
   }

    const empty = () =>{
    if (userAnswer === ""){
        MySwal.fire({
            title: "Please Select an answer!",
            confirmButtonColor: "darkred",
            focusDeny: true
        })
   }
}

   
   const randomProps = [`${props.character}`, `${props.randomCharacterOne}`, `${props.randomCharacterTwo}`];


// Use Effect that allowsus the shuffle & randomize the order position of quote options
useEffect(() =>{
    let randomOrder = [0,1,2];
    for(let i = 3; i > 0; i--){
        let randoNumber = Math.floor(Math.random()*i);
        newArray.push(randomOrder[randoNumber]);
        randomOrder.splice(randoNumber,1);
   }
}, [updateState, newArray])
    
// Function that checks which radio button was pressed and also sets the value of the usersAnswer to the value of the button
   const handleClick = ((e) =>{
    setUserAnswer(e.target.value);

    if(e.target.id === "option1"){
        setCheckedOne(true);
        setCheckedTwo(false);
        setCheckedThree(false)
    } else if(e.target.id === "option2"){
        setCheckedTwo(true);
        setCheckedOne(false);
        setCheckedThree(false);
    }
    else{
        setCheckedThree(true);
        setCheckedTwo(false);
        setCheckedOne(false);
    }
   })

// Function to reset buttons after a user submit their answer
   const resetButtons = () =>{
    setCheckedOne(false);
    setCheckedTwo(false);
    setCheckedThree(false);
    setNewArray([]);
    setUpdateState(!updateState);
   }

 



    return(
        <div className="question-container">
            <form onSubmit={submitHandler}>
                <fieldset>"{props.quote}"</fieldset>
                <div className="input-container">
                    <div className="radio-container">
                        <input type="radio" id="option1" name="character" value={randomProps[newArray[0]]} onClick={handleClick} checked={checkedOne} required="true"></input>
                        <label htmlFor="option1">{randomProps[newArray[0]]}</label>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="option2" name="character" value={randomProps[newArray[1]]} onClick={handleClick} checked={checkedTwo} required="true"></input>
                        <label htmlFor="option2">{randomProps[newArray[1]]}</label>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="option3" name="character" value={randomProps[newArray[2]]} onClick={handleClick} checked={checkedThree} required="true"></input>
                        <label htmlFor="option3">{randomProps[newArray[2]]}</label>
                    </div>
                </div>
                <div>
                    <input type="submit" id="submitBtn" value="Submit Answer" onClick={empty}></input>
                </div>
            </form>
        </div>
        

    )
}

export default Question;