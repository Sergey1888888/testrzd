import React from 'react';
import styled from "styled-components";
import PassengerForm from "./components/PassengerForm/PassengerForm";

const StyledApp = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 3rem 5rem;
`

const App: React.FC = () => {
    return (
        <StyledApp>
            <PassengerForm/>
        </StyledApp>
    );
}

export default App;
