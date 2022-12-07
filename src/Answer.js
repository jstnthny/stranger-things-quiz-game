import './App.css';
import answerRight from './assets/answer-right.webp'
import answerWrong from './assets/answer-wrong.gif'

const Answer = (props) => {


const closeHandler = () =>{
    props.closeModal(false);
}


return(
    <div className="main-model-container">
        {/* <h1>{props.correctAnswer}</h1> */}
        <div className="modal-background">
            <div className="modal-container">
                <section className="modal-title"><h2>{props.rightOrWrong ? "You were right!" : "Sorry not quite right!"}</h2>
                </section>
                <section className="modal-body">
                    <p>The answer was {props.correctAnswer}</p>
                    <div className="gif-container">
                        {props.rightOrWrong ? <img  class="gif-right" src={answerRight} alt="A Gif of Steve & Nancy from the show stranger things dancing"/> :<img class="gif-wrong" src={answerWrong} alt="A gif of Duston from the show Stranger Things looking sad." />  }
                    </div>
                </section>
                <section className="modal-footer"><button onClick={closeHandler}>Next Quote</button></section>
            </div>
        </div>
    </div>
)

}

export default Answer;