import { useEffect, useState } from 'react';
import './App.css';

const Answer = (props) => {

const [questionAsked, setQuestionAsked] = useState()

const closeHandler = () =>{
    props.closeModal(false);
}



return(
    <div className="main-model-container">
        {/* <h1>{props.correctAnswer}</h1> */}
        <div className="modal-background">
            <div className="modal-container">
                <section className="modal-title"><h1>THE ANSWER WAS!</h1></section>
                <section className="modal-body"><p>{props.correctAnswer}</p></section>
                <section className="modal-footer"><button onClick={closeHandler}>Next Quote</button></section>
            </div>
        </div>
    </div>
)

}

export default Answer;