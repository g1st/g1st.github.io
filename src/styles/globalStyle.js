import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  :root {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.colors.primary};
  }
  
  body {
    transition: all 0.15s linear;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    line-height: 1.15;
  }

  a {
    color:  ${({ theme }) => theme.colors.text};
  }
`;
