
const Question = (props) => {


   

    return(
        <div>
            <h2>{props.quote}</h2>
            <button>{props.character}</button>
            <button>{props.randomCharacter}</button>
        </div>
    )
}

export default Question;