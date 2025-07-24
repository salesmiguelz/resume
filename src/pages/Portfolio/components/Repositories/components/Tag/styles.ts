import styled from "styled-components";

interface TagColorProps {
    variant: 'blue' | 'green'
}


export const TagContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    background-color: red;
    gap: 0.5rem;
    background-color: ${props => props.theme['base-input']};
    max-width: 12rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.625rem;
`

export const TagColor = styled.span<TagColorProps>`
    height: 1rem;
    width: 1rem;
    background-color: ${props =>
        props.variant === 'blue'
            ? props.theme['blue']
            : props.variant === 'green'
                ? '#1ABC9C'
                : 'transparent'};
    border-radius: 50%;
`

export const TagLabel = styled.p`
    color: ${props => props.theme['base-subtitle']};
`