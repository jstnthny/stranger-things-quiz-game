import { useEffect, useState } from 'react';

const Question = (props) => {


   const [userAnswer, setUserAnswer] = useState('')

   const submitHandler = (e) =>{
    props.getUserPick(e,userAnswer);
   }

   const handleClick = ((e) =>{
    // console.log(e.target.value);
    setUserAnswer(e.target.value);
   })

//    const handleSubmit = (e) =>{
//     e.preventDefault(); 
//     console.log(userAnswer)
//    }


    return(

        <form onSubmit={submitHandler}>
            <fieldset>{props.quote}</fieldset>
            <div>
                <input type="radio" id="option1" name="character" value={props.character} onClick={handleClick}></input>
                <label htmlFor="option1">{props.character}</label>
            </div>
            <div>
                <input type="radio" id="option2" name="character" value={props.randomCharacter} onClick={handleClick}></input>
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