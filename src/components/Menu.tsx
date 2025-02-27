import styled from "styled-components";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </StyledMenu>
    );
};

export const StyledMenu = styled.div`
    ul {
        display: flex;
        gap: 30px;
    }
`


export default Menu;