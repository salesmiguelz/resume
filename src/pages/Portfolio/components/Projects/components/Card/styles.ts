import styled from "styled-components";

export const CardContainer = styled.div`
  width: 24rem;
  max-height: 22rem;
  background-color: ${props => props.theme['base-post']};
  border-radius: 0.625rem;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    outline: 1px solid ${props => props.theme['blue']};
  }

`

export const CardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const CardTags = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: row;
    gap: 0.625rem;
`

export const CardTitle = styled.h2`
    color: ${props => props.theme['base-title']};
    font-size: ${props => props.theme['text-sm']};
    font-weight: bold;
    max-width: 80%;
`

export const CardDate = styled.p`
    color: ${props => props.theme['base-span']};
    font-size: 12px;
    margin-top: 0.250rem;
`

export const CardDescription = styled.p`
    margin-top: 1.5rem;
    color: ${props => props.theme['base-text']};
    font-size: ${props => props.theme['text-sm']};
    margin-bottom: 1rem;
`

export const CardUpdatedAt = styled.p`
  color: ${props => props.theme['base-span']};
  font-size: ${props => props.theme['text-xs']};
  margin-top: auto;
`