import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;     
  top: 0;
  left: 0;
  width: 100vw;        
  height: 100vh;        
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerElement = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;      
  border-top-color: ${props => props.theme['blue']};    
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;