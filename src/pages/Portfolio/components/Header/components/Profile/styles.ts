import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin: 4rem 0 -12rem 0;
    max-width: 90vw;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['base-profile']};
    padding: 2rem;
    border-radius: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProfileImage = styled.div`
    img{
        width: 9rem;
        height: 9rem;
        border-radius: 0.5rem;
    }
`

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    padding: 1rem 2rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        margin-top: 2rem;
    }
    
`
export const ProfileHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfileTitle = styled.h1`
    color: ${props => props.theme['white']};
    font-size: ${props => props.theme['text-lg']};
`

export const ProfileDescription = styled.h1`
    margin-top: 0.5rem;
    color: ${props => props.theme['base-text']};
    font-size: ${props => props.theme['text-sm']};
    font-weight: normal;
`


export const ProfileSocial = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 2rem;
     @media (max-width: 768px) {
        margin-top: 2rem;
        flex-direction: column;
        gap: 1.5rem;
    }

`

export const ProfileIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    svg{
        color: ${props => props.theme['base-label']}
    }

    p{
        color: ${props => props.theme['base-subtitle']};
    }
`