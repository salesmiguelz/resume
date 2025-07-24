import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100dvh;
    margin: auto;
    max-width: 80vw;
`

export const TitleContainer = styled.div`
    h1{ 
        font-size: 4rem;
        color: ${props => props.theme['white']};
    }

    span{
        color: ${props => props.theme['blue']};
        font-style: italic;
    }
`
export const DescriptionContainer = styled.div`
    p{
        text-align: center;
        font-size: ${props => props.theme['text-lg']};
        color: ${props => props.theme['base-span']};
    }
`

export const SearchFormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;

    span{
        margin-top: 1rem;
        padding: 0.6rem;
        border-radius: 0.25rem 0 0 0.25rem;
        color: ${props => props.theme['white']};
        font-size: ${props => props.theme['text-sm']};
        background-color: ${props => props.theme['base-post']};
    }

    input{
        width: 30rem;
        height: 2.5rem;
        padding: 0.6rem;
        border-radius: 0 0.25rem 0.25rem 0;
        margin-right: 0.5rem;
    }

    button{
        margin-top: 1rem;
        height: 2.5rem;
        color: ${props => props.theme['base-label']};
        border: none;
        outline: 1px solid ${props => props.theme['base-border']};
        padding:  0.4rem 1rem;

        border-radius: 0.5rem;
        font-size: ${props => props.theme['text-sm']};

        background-color: ${props => props.theme['blue']};
        color: ${props => props.theme['white']};
        cursor: pointer;
        transition: 0.2s;
        
        &:hover{
            background-color: #63acf5ff;
        }
        
    }
`

export const ProjectDetails = styled.div`
    position: absolute;
    bottom: 1rem;
    color: ${props => props.theme['base-span']};

    a{
        text-decoration: none;
        color: ${props => props.theme['base-span']};
        transition: 0.5s;
        
        &:hover{
            border-bottom: 1px solid ${props => props.theme['base-span']};

        }

    }
`