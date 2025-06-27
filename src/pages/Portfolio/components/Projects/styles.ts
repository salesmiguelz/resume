import styled from "styled-components";

export const ProjectsContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

     @media (max-width: 768px) {
         grid-template-columns: 1fr;
    }
`