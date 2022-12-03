import { useState } from 'react';

const Question = (props) => {


   const [userAnswer, setUserAnswer] = useState('')
   const [checkedOne, setCheckedOne] = useState(false);
   const [checkedTwo, setCheckedTwo] = useState(false);
   const [checkedThree, setCheckedThree] = useState(false);
   const submitHandler = (e) =>{
    props.getUserPick(e,userAnswer);
    resetButtons();
   }


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
    // resetButtons();
   }
   )

   const resetButtons = () =>{
    setCheckedOne(false);
    setCheckedTwo(false);
    setCheckedThree(false);
   }


    return(

        <form onSubmit={submitHandler}>
            <fieldset>"{props.quote}"</fieldset>
            <div>
                <input type="radio" id="option1" name="character" value={props.character} onClick={handleClick} checked={checkedOne} required></input>
                <label htmlFor="option1">{props.character}</label>
            </div>
            <div>
                <input type="radio" id="option2" name="character" value={props.randomCharacterOne} onClick={handleClick} checked={checkedTwo} required></input>
                <label htmlFor="option2">{props.randomCharacterOne}</label>
            </div>
             <div>
                <input type="radio" id="option3" name="character" value={props.randomCharacterTwo} onClick={handleClick} checked={checkedThree} required></input>
                <label htmlFor="option2">{props.randomCharacterTwo}</label>
            </div>
            <div>
                {/* <label htmlFor="submitBtn"></label> */}
                <input type="submit" id="submitBtn"></input>
            </div>
        </form>

    )
}

export default Question;