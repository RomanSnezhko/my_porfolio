import styled from "styled-components";
import photo from "../../../assets/img/photo1.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around" direction="column">

                <h2>Roman Snezhko</h2>
                <h1>UX | UI developer </h1>
                <span>30 years old, Soligorsk</span>

                <Photo src={photo} alt=""/>

            </FlexWrapper>
        </StyledMain>
    )
        ;
};
const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #b2b1b1;`


const Photo = styled.img`
    width: 950px;
    height: 380px;
    object-fit: cover;
`