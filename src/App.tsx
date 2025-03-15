import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #e91e63;
`;