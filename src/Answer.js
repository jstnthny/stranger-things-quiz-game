import './App.css';

const Answer = (props) => {


const closeHandler = () =>{
    props.closeModal(false);
}


return(
    <div className="main-model-container">
        {/* <h1>{props.correctAnswer}</h1> */}
        <div className="modal-background">
            <div className="modal-container">
                <section className="modal-title"><h1>{props.rightOrWrong ? "You were right!" : "You were wrong!"}</h1>
                </section>
                <section className="modal-body"><p>The answer was {props.correctAnswer}</p></section>
                <section className="modal-footer"><button onClick={closeHandler}>Next Quote</button></section>
            </div>
        </div>
    </div>
)

}

export default Answer;