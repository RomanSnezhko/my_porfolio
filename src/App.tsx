import './App.css'
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Title>Hi babby</Title>
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #e91e63;
`;