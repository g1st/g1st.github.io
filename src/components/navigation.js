import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import Blog from "../assets/menu_book-24px.svg";
import Code from "../assets/code-24px.svg";
import Mail from "../assets/email-24px.svg";
import { media } from "../styles/mixins";

const Nav = styled.nav`
  width: 30rem;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 0;
  width: 33%;
  text-align: center;
`;

const MenuButton = styled(GatsbyLink)`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.2em 0.5em;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  margin: 0 auto;

  ${media.xs`

    &:hover {
      cursor: pointer;
      width: 6em;
      background: ${({ theme }) => theme.colors.tertiary};

      span {
        display: inline;
      }
      svg {
        display: none;
      }
    }
  `}

  ${media.sm`
    padding: 0.4em 0.75em;
    
  `}
`;

const LinkText = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  display: none;
  margin: 0 auto;
`;

const BlogIcon = styled(Blog)`
  fill: ${({ theme }) => theme.colors.text};
`;

const CodeIcon = styled(Code)`
  fill: ${({ theme }) => theme.colors.text};
`;

const MailIcon = styled(Mail)`
  fill: ${({ theme }) => theme.colors.text};
`;

const Navigation = () => (
  <Nav role="navigation" aria-label="Navigation">
    <Menu>
      <MenuItem>
        <MenuButton to="/blog" aria-label="View blog page">
          <LinkText>Blog</LinkText>
          <BlogIcon />
        </MenuButton>
      </MenuItem>
      <MenuItem>
        <MenuButton to="/projects" aria-label="View projects page">
          <LinkText>Projects</LinkText>
          <CodeIcon />
        </MenuButton>
      </MenuItem>
      <MenuItem>
        <MenuButton to="/contact" aria-label="View contact page">
          <LinkText>Contact</LinkText>
          <MailIcon />
        </MenuButton>
      </MenuItem>
    </Menu>
  </Nav>
);

export default Navigation;
