/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/header";
import Menu from "../components/menu";
import { dark, light } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import { useDarkMode } from "../hooks/useDarkTheme";
import "../styles/layout.css";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  main > div {
    /* overflow-x visible; */
  }
`;

const Layout = ({ path, children }) => {
  const [theme, setTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        <GlobalStyle />
        <Header toggleTheme={setTheme} path={path} />
        <Menu />
        <Container>
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
