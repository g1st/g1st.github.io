import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Navigation from "./navigation";
import { media } from "../styles/mixins";
import { sizes } from "../styles/variables";
import ToggleIcon from "../assets/invert_colors-24px.svg";
import GSLogo from "../assets/gs-logo.svg";

const Container = styled.header`
  height: ${sizes.headerHeight};
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1em;
  z-index: 1;

  ${media.sm`
    padding: 0 3em;
  `}
`;

const ToggleContainer = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;

  ${media.xs`
  `}

  ${media.sm`
  `}

  &:hover {
    cursor: pointer;
  }

  svg {
    transition: all 0.2s linear;

    &:first-child {
      transform: ${({ theme: { name } }) =>
        name === "dark" ? "rotateY(0)" : "rotateY(180deg)"};
    }
  }
`;

const LogoButton = styled.div`
  ${media.xs`
  `}

  ${media.sm`
  `}

  &:hover {
    cursor: pointer;
  }

  > a {
    display: flex;
    padding: 0.5em;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ContentWrapper>
        <LogoContainer>
          <LogoButton title="Home" aria-label="Go to homepome">
            <Link to="/">
              <GSLogo style={{ fill: theme.colors.themeToggle }} />
            </Link>
          </LogoButton>
        </LogoContainer>
        <Navigation />
        <ToggleContainer
          aria-label={
            theme.name === "dark" ? "Activate light mode" : "Activate dark mode"
          }
          title={
            theme.name === "dark" ? "Activate light mode" : "Activate dark mode"
          }
        >
          <ToggleIcon
            style={{ fill: theme.colors.themeToggle }}
            onClick={toggleTheme}
          />
        </ToggleContainer>
      </ContentWrapper>
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
