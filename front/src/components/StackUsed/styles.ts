import styled from "styled-components";

export const StackUsedContainer = styled.div`
    pointer-events: none;
`

export const LanguagesUsedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 90vw;
    width: 50rem;
    margin: 9rem auto 0;

    @media (max-width: 768px) {
      margin: 28rem auto 0;;
    }
`

export const TechnologiesUsedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 90vw;
    width: 50rem;
    margin: 2rem auto 0;
`

export const LanguagesTitle = styled.p`
  font-size: ${({ theme }) => theme["text-sm"]};
  color: ${({ theme }) => theme["base-subtitle"]};
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 1rem;
`;

export const TechnologiesTitle = styled.p`
  font-size: ${({ theme }) => theme["text-sm"]};
  color: ${({ theme }) => theme["base-subtitle"]};
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 1rem;
`;