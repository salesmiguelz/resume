import styled from "styled-components";

export const RepositoriesText = styled.div`
    max-width: 90vw;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem auto 0;
`
export const RepositoriesTitle = styled.p`
    font-size: ${props => props.theme['text-sm']};
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
`
export const RepositoriesData = styled.p`
    font-size: ${props => props.theme['text-sm']};
    color: ${props => props.theme['base-span']};
`

export const RepositoriesContainer = styled.div`
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

     @media (max-width: 768px) {
         grid-template-columns: 1fr;
    }
`