import { useState, useEffect } from 'react';
import './App.css';

const Question = (props) => {


   const [userAnswer, setUserAnswer] = useState('')
   const [checkedOne, setCheckedOne] = useState(false);
   const [checkedTwo, setCheckedTwo] = useState(false);
   const [checkedThree, setCheckedThree] = useState(false);
   const [newArray, setNewArray] = useState([]);
   const [updateState, setUpdateState] = useState(true);
   const submitHandler = (e) =>{
    props.getUserPick(e,userAnswer);
    resetButtons();
   }
   
   const randomProps = [`${props.character}`, `${props.randomCharacterOne}`, `${props.randomCharacterTwo}`];



useEffect(() =>{
    let randomOrder = [0,1,2];
    for(let i = 3; i > 0; i--){
        let randoNumber = Math.floor(Math.random()*i);
        newArray.push(randomOrder[randoNumber]);
        randomOrder.splice(randoNumber,1);
   }
}, [updateState, newArray])
    
console.log(newArray);
// console.log(`Random order array: ${randomOrder}`);




   const handleClick = ((e) =>{
    setUserAnswer(e.target.value);

    console.log(e.target.id);
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
                        <input type="radio" id="option1" name="character" value={randomProps[newArray[0]]} onClick={handleClick} checked={checkedOne} required></input>
                        <label htmlFor="option1">{randomProps[newArray[0]]}</label>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="option2" name="character" value={randomProps[newArray[1]]} onClick={handleClick} checked={checkedTwo} required></input>
                        <label htmlFor="option2">{randomProps[newArray[1]]}</label>
                    </div>
                    <div className="radio-container">
                        <input type="radio" id="option3" name="character" value={randomProps[newArray[2]]} onClick={handleClick} checked={checkedThree} required></input>
                        <label htmlFor="option3">{randomProps[newArray[2]]}</label>
                    </div>
                </div>
                <div>
                    <input type="submit" id="submitBtn" value="Submit Answer"></input>
                </div>
            </form>
        </div>
        

    )
}

export default Question;