import { useEffect, useState } from 'react';

const Question = (props) => {


   const [userAnswer, setUserAnswer] = useState('')
   const [checkedOne, setCheckedOne] = useState(false);
   const [checkedTwo, setCheckedTwo] = useState(false);

   const submitHandler = (e) =>{
    props.getUserPick(e,userAnswer);
    resetButtons();
   }


   const handleClick = ((e) =>{
    setUserAnswer(e.target.value);

    console.log(e.target.id);
    if(e.target.id == "option1"){
        setCheckedOne(true);
        setCheckedTwo(false);
        console.log(e.target);
    } else {
        setCheckedTwo(true);
        setCheckedOne(false);
    }
    // resetButtons();
   }
   )

   const resetButtons = () =>{
    setCheckedOne(false);
    setCheckedTwo(false);
   }


    return(

        <form onSubmit={submitHandler}>
            <fieldset>"{props.quote}"</fieldset>
            <div>
                <input type="radio" id="option1" name="character" value={props.character} onClick={handleClick} checked={checkedOne} required></input>
                <label htmlFor="option1">{props.character}</label>
            </div>
            <div>
                <input type="radio" id="option2" name="character" value={props.randomCharacter} onClick={handleClick} checked={checkedTwo} required></input>
                <label htmlFor="option2">{props.randomCharacter}</label>
            </div>
            <div>
                {/* <label htmlFor="submitBtn"></label> */}
                <input type="submit" id="submitBtn"></input>
            </div>
        </form>

    )
}

export default Question;