import {question} from "../app/sentenceSlice";

const Step: React.FC<{question: question}> = (props) => {
    return (
        <div className="step">
            <p>{props.question.question}</p>
            <div className={props.question.valid ? "valid circle" : "circle notValid"}>
              {props.question.id}
            </div>
          </div>
    )
}

export default Step;