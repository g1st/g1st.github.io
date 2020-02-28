import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "gatsby";

import BlogIcon from "../assets/menu_book-24px.svg";
import CodeIcon from "../assets/code-24px.svg";
import MailIcon from "../assets/email-24px.svg";

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`;

const ButtonWrapper = styled.ul`
  transform: translateX(-87%);
  list-style: none;
  margin-bottom: 0;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Button = styled.li`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 0.4rem 0 0.4rem 1.6rem;
  margin-bottom: 2px;
  position: relative;
  width: 10rem;
  transition: all 0.2s cubic-bezier(0.22, 0.68, 0, 1.71);
  display: flex;
  transform: translateX(0);

  &:hover {
    cursor: pointer;
    transform: translateX(50%);
    & > span {
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
        <Link to="/projects/">
          <Button>
            <Text>Blog</Text>
            <BlogIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",
                position: "absolute",
              }}
            />
          </Button>
        </Link>
        <Link to="/projects/">
          <Button>
            <Text>Projects</Text>
            <CodeIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",
                position: "absolute",
              }}
            />
          </Button>
        </Link>
        <Link to="/projects/">
          <Button>
            <Text>Contact</Text>
            <MailIcon
              style={{
                fill: theme.colors.text,
                right: "0.8rem",
                position: "absolute",
              }}
            />
          </Button>
        </Link>
      </ButtonWrapper>
    </Nav>
  );
};

export default Menu;
