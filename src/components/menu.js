import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "gatsby";

import BlogIcon from "../assets/menu_book-24px.svg";
import CodeIcon from "../assets/code-24px.svg";
import MailIcon from "../assets/email-24px.svg";
import { media } from "../styles/mixins";

const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 92%) rotate(-90deg);

  ${media.md`
    left: 0;
    top: 50%;
    bottom: unset;

    transform: translate(-77%, -50%) rotate(0);
  `}
`;

const ButtonWrapper = styled.ul`
  list-style: none;
  margin-bottom: 0;
`;

const Button = styled.li`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 0.4rem 0 0.4rem 1.6rem;
  margin-bottom: 2px;
  position: relative;
  width: 10rem;
  transition: all 0.2s cubic-bezier(0.22, 0.68, 0, 1.71);
  display: flex;
  align-items: center;
  transform: translateX(0);

  &:hover {
    cursor: pointer;
    transform: translateX(50%);
    a > span {
      opacity: 1;
      margin-left: 1.4rem;
    }
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  opacity: 0.5;
  transition: all 0.2s cubic-bezier(0.22, 0.68, 0, 1.71);
`;

const Menu = () => {
  const theme = useContext(ThemeContext);

  return (
    <Nav>
      <ButtonWrapper>
        <Button>
          <Link to="/blog/" aria-label="View blogs page">
            <Text>Blog</Text>
            <BlogIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",

                position: "absolute",
              }}
            />
          </Link>
        </Button>
        <Button>
          <Link to="/projects/" aria-label="View projects page">
            <Text>Projects</Text>
            <CodeIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",
                position: "absolute",
              }}
            />
          </Link>
        </Button>
        <Button>
          <Link to="/projects/" aria-label="View contacts page">
            <Text>Contact</Text>
            <MailIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",
                position: "absolute",
              }}
            />
          </Link>
        </Button>
      </ButtonWrapper>
    </Nav>
  );
};

export default Menu;
