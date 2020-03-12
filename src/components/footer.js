import React from "react";
import styled from "styled-components";

import GitHub from "../assets/tools-svg/github.svg";
import { sizes } from "../styles/variables";

const FooterTag = styled.footer`
  width: 100%;
  height: ${sizes.footerHeight};
  background: ${({ theme }) => theme.colors.footer};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.8rem;

  a {
    margin-left: 0.6em;
    padding: 0.4em;
  }
`;

const GitHubSVG = styled(GitHub)`
  fill: ${({ theme }) => theme.colors.text};
  width: 2.5rem;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Footer = () => (
  <FooterTag>
    <Text>
      &copy; 2020 Gintaras Stankus
      <a
        href="http://github.com/g1st"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to github profile page"
      >
        <GitHubSVG />
      </a>
    </Text>
  </FooterTag>
);

export default Footer;
