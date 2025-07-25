import styled from "styled-components";

export const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ErrorMessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    max-width: 80vw;
    text-align: center;
    margin: 0 auto;

    span{
        color: ${props => props.theme['white']};
        font-size: 2rem;
    }
`

export const ErrorMessage = styled.p`
    margin-top: 1rem;
    font-size: ${props => props.theme['text-lg']};
    color: ${props => props.theme['white']}
`