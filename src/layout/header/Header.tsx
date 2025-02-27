import Logo from "../../components/logo/Logo.tsx";
import styled from "styled-components";
import Menu from "../../components/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <Menu></Menu>
        </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`