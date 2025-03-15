import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import Icon from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export
Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle></SectionTitle>
            <span><I work in such programs as/span>
            <FlexWrapper>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`