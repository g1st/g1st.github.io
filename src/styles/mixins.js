import styled, { css } from "styled-components";
import { breakpoints } from "./variables";

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media screen and (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const AnchorLink = styled.a`
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;
