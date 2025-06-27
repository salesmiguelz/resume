import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('./src/assets/header-cover.svg');
    background-position: center;
    background-size: cover;
    height: 18rem;
    padding: 12px 0px;
`

export const HeaderLogoContainer = styled.div`
    color: ${props => props.theme['blue']};
     @media (max-width: 768px) {
        margin-top: 12rem;
    }
`

export const HeaderTitle = styled.p`
    font-size: ${props => props.theme['text-xl']};
    color: ${props => props.theme['blue']};
    font-family: 'Coda', 'sans-serif';
`