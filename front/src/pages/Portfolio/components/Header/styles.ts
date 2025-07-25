import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('/header-cover.svg');
    background-position: center;
    background-size: cover;
    height: 18rem;
    padding: 12px 0px;
`

export const HeaderReturnContainer = styled.div`
    position: fixed;
    top: 1rem;
    left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['base-span']};
    background-color: ${props => props.theme['base-post']};
    padding: 0.5rem;
    border: 2px solid ${props => props.theme['base-span']};
    border-radius: 0.5rem;
    cursor: pointer
`

export const HeaderLogoContainer = styled.div`
    color: ${props => props.theme['blue']};
     @media (max-width: 768px) {
        margin-top: 16rem;
    }
`

export const HeaderTitle = styled.p`
    font-size: ${props => props.theme['text-xl']};
    color: ${props => props.theme['blue']};
    font-family: 'Coda', 'sans-serif';
`