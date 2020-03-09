import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { media } from "../styles/mixins";
import { sizes } from "../styles/variables";
import ToggleIcon from "../assets/invert_colors-24px.svg";
import HomeIcon from "../assets/home-24px.svg";

const Container = styled.header`
  height: ${sizes.headerHeight};
`;

const ToggleContainer = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 4%;
  right: 5%;
  z-index: 2;

  ${media.xs`
  `}

  ${media.sm`
  `}

  &:hover {
    cursor: pointer;
  }

  svg {
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme: { name } }) =>
        name === "dark" ? "rotateY(0)" : "rotateY(180deg)"};
    }
  }
`;
const HomeContainer = styled.div`
  position: absolute;
  top: 4%;
  left: 5%;
  z-index: 2;

  ${media.xs`
    /* top: 20%; */
  `}

  ${media.sm`
    /* top: 30%; */
  `}

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ toggleTheme, path }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      {path !== "/" && (
        <HomeContainer title="Home" aria-label="Home">
          <Link to="/">
            <HomeIcon style={{ fill: theme.colors.themeToggle }} />
          </Link>
        </HomeContainer>
      )}
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
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
