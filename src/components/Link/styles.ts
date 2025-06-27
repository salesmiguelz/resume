import styled from "styled-components";

export const LinkContainer = styled.div`
    color: ${props => props.theme['blue']};
    display: flex;
    gap: 0.2rem;
    cursor: pointer;


    p{
        font-size: ${props => props.theme['text-xs']};
    }

    &:hover{
        border-bottom: 1px solid ${props => props.theme['blue']};
        margin-bottom: -1px;
    }
`