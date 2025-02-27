import styled from "styled-components";

type FlexWrapperProps = {
direction?: string;
justify?: string;
align?: string;
wrap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-content: ${(props) => props.align || "stretch"};
    wrap: ${(props) => props.wrap || "nowrap"};
`