import styled from "styled-components";

export const TagContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme['base-input']};
    width: 30%;
    padding: 0.2rem ;
    border-radius: 0.625rem;
    flex: 1;
`

export const TagColor = styled.span`
    width: 1rem;
    height: 1rem;
    background-color: red;
    border-radius: 50%;
`

export const TagLabel = styled.p`
    color: ${props => props.theme['base-subtitle']};
`