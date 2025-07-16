import styled from "styled-components";

export const CardContainer = styled.div`
    width: 25rem;
    height: 15rem;
    max-width: 90vw;
    background-color: ${props => props.theme['base-post']};
    border-radius: 0.625rem;
    padding: 2rem;
    cursor: pointer;

    &:hover{
        outline: 1px solid ${props => props.theme['blue']}
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const CardTags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.625rem
`

export const CardTitle = styled.h2`
    color: ${props => props.theme['base-title']};
    font-size: ${props => props.theme['text-sm']};
    font-weight: bold;
    max-width: 80%;
`

export const CardDate = styled.p`
    color: ${props => props.theme['base-span']};
    font-size: 12px;
    margin-top: 0.250rem;
`

export const CardDescription = styled.p`
    margin-top: 1rem;
    color: ${props => props.theme['base-text']};
    font-size: ${props => props.theme['text-sm']};
`