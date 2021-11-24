import { question } from "../app/sentenceSlice";
import styled from "styled-components";

const StepContainer = styled.div`
height: 100px;
width: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;

@media (max-width: 720px) {
  width: 70px;
}
`

const Text = styled.p`
color: white;
font-size: 16px;
`

const Circle = styled("div")<{backgroundColor: string}>`
height: 20px;
width: 20px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};
`

const Step: React.FC<{ question: question }> = (props) => {

  return (
    <StepContainer>
      <Text>{props.question.question}</Text>
      <Circle backgroundColor={props.question.valid ? "green" : "red"}>
        <Text>{props.question.id}</Text>
      </Circle>
    </StepContainer>
  )
}

export default Step;