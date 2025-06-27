import styled from "styled-components";

export const SearchFormContainer = styled.div`
    max-width: 90vw;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 12rem auto 4rem;

    @media (max-width: 768px) {
        margin: 30rem auto 4rem;
    }
`

export const SearchFormText = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SearchFormTitle = styled.p`
    font-size: ${props => props.theme['text-sm']};
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
`
export const SearchFormData = styled.p`
    font-size: ${props => props.theme['text-sm']};
    color: ${props => props.theme['base-span']};
`

export const SearchFormInput = styled.input`
    margin-top: 1rem;
    width: 100%;

    color: ${props => props.theme['base-label']};
    background-color: ${props => props.theme['base-input']};
    border: none;
    outline: 1px solid ${props => props.theme['base-border']};
    padding:  0.75rem 1rem;

    border-radius: 0.5rem;

    &:focus{
        color: ${props => props.theme['white']};
        outline: 1px solid ${props => props.theme['blue']};
    }
`