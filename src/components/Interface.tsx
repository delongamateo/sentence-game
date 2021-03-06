import { useAppSelector, useAppDispatch } from "../app/hooks";
import { makeSentence, changeStep, saveWord, questionState } from "../app/sentenceSlice";
import Step from "./Step";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`

const Title = styled.h1`
color: white;
font-size: 32px;
`

const ProgressBar = styled.div`
display: flex;
flex-direction: row;
`

const Input = styled.input`
margin: 10px;
padding: 10px 50px;
border-radius: 5px;
border: 1px solid white;
background-color: #38385f;
color: white;
text-align: center;

@media (max-width: 720px) {
  margin: 10px 24px;
}
`

const Button = styled.button`
margin: 10px;
padding: 10px 20px;
background-color: #38385f;
color: white;
border-radius: 5px;
border: 1px solid white;
cursor: pointer;
&:active {
  transform: scale(0.96);
}
`

const Text = styled("p")<{margin: string}>`
color: white;
font-size: 16px;
margin: ${props => props.margin};
`

const Interface = () => {
  const dispatch = useAppDispatch();
  const sentence = useAppSelector((state) => state.sentence);

  return (
    <Container>
      <Title>Sentence maker</Title>
      <ProgressBar>
        {sentence.questions.map((question: questionState) => <Step key={question.id} question={question} />)}
      </ProgressBar>
      <Container>
        <Text margin="0px">{sentence.questions[sentence.step].question}</Text>
        <Input
          value={sentence.questions[sentence.step].answer}
          type="text"
          onChange={(e) => { dispatch(saveWord(e.target.value)) }}
        />
      </Container>
      <Container>
        <div>
          {sentence.step > 0 && <Button onClick={() => dispatch(changeStep("back"))}>Back</Button>}
          {sentence.step < 3 && <Button onClick={() => dispatch(changeStep("next"))}>Next</Button>}
        </div>
        <Button onClick={() => dispatch(makeSentence())}>Make a sentence</Button>
      </Container>
      <Container>
        <Text margin="20px">{sentence.sentence}</Text>
      </Container>
    </Container>
  );
};


export default Interface;
