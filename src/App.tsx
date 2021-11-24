import Question from './components/Question';
import styled from "styled-components";

const AppContainer = styled.div`
margin-top: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #1F1F3C;
border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

function App() {
  return (
    <AppContainer>
      <Question />
    </AppContainer>
  );
}

export default App;
