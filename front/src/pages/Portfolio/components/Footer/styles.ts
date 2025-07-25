import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;
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