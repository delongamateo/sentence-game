import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { who, what, where, when, makeSentence } from "../app/sentenceSlice";
import "./question.css"

const Question = () => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const sentence = useAppSelector((state) => state.sentence);

  const changeStep = (direction: string) => {
    if (direction === "forward" && step < 3) {
      setStep(step + 1)
    } else if (direction === "backward" && step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container">
      <div className="progress">
        {sentence.questions.map((question) =>
          <div key={question.id} className="step">
            <p>{question.question}</p>
            <div className={question.valid ? "valid circle" : "circle notValid"}>
              {question.id}
            </div>
          </div>)}
      </div>
      <div className="inputContainer">
        <p className="title">{sentence.questions[step].question}</p>
        <input
          className="input"
          value={sentence.questions[step].answer}
          type="text"
          onChange={(e) => {
            if (step === 0) {
              dispatch(who(e.target.value));
            } else if (step === 1) {
              dispatch(what(e.target.value));
            } else if (step === 2) {
              dispatch(where(e.target.value));
            } else if (step === 3) {
              dispatch(when(e.target.value));
            }
          }}
        />
      </div>
      <div className="buttonsContainer">
        <div>
        <button className="button" onClick={() => changeStep("backward")}>Back</button>
        <button className="button" onClick={() => changeStep("forward")}>Next</button>
        </div>
        <button className="button" onClick={() => dispatch(makeSentence())}>Make a sentence</button>
      </div>
      <p className="sentence">{sentence.sentence}</p>


    </div>
  );
};


export default Question;
