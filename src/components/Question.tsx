import { useAppSelector, useAppDispatch } from "../app/hooks";
import { makeSentence, changeStep, saveWord, question } from "../app/sentenceSlice";
import "./question.css"
import Step from "./Step";

const Question = () => {
  const dispatch = useAppDispatch();
  const sentence = useAppSelector((state) => state.sentence);

  return (
    <div className="container">
      <div className="progress">
        {sentence.questions.map((question: question) => <Step key={question.id} question={question}/>)}
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
        {sentence.step > 0 && <button className="button" onClick={() => dispatch(changeStep("back"))} >Back</button>}
        {sentence.step < 3 && <button className="button" onClick={() => dispatch(changeStep("next"))}>Next</button>}
        </div>
        <button className="button" onClick={() => dispatch(makeSentence())}>Make a sentence</button>
      </div>
      <p className="sentence">{sentence.sentence}</p>


    </div>
  );
};


export default Question;
