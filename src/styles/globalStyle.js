import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  :root {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
  
  body {
    transition: all 0.25s linear;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primary};
  }

  p {
    line-height: 1.15;
  }
`;
