import Icon from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"css"}></Icon>
            <SkillTitle></SkillTitle>
            /* progress line*/
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
`
const SkillTitle = styled.h3`
`