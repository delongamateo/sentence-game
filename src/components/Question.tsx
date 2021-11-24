import { useAppSelector, useAppDispatch } from "../app/hooks";
import { makeSentence, changeStep, saveWord, question } from "../app/sentenceSlice";
import "./question.css"

const Question = () => {
  const dispatch = useAppDispatch();
  const sentence = useAppSelector((state) => state.sentence);

  return (
    <div className="container">
      <div className="progress">
        {sentence.questions.map((question: question) =>
          <div key={question.id} className="step">
            <p>{question.question}</p>
            <div className={question.valid ? "valid circle" : "circle notValid"}>
              {question.id}
            </div>
          </div>)}
      </div>
      <div className="inputContainer">
        <p className="title">{sentence.questions[sentence.step].question}</p>
        <input
          className="input"
          value={sentence.questions[sentence.step].answer}
          type="text"
          onChange={(e) => { dispatch(saveWord(e.target.value))} }
        />
      </div>
      <div className="buttonsContainer">
        <div>
        <button className="button" onClick={() => dispatch(changeStep("back"))} >Back</button>
        <button className="button" onClick={() => dispatch(changeStep("forward"))}>Next</button>
        </div>
        <button className="button" onClick={() => dispatch(makeSentence())}>Make a sentence</button>
      </div>
      <p className="sentence">{sentence.sentence}</p>


    </div>
  );
};


export default Question;
