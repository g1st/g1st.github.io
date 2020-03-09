/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { dark, light } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import { useDarkMode } from "../hooks/useDarkTheme";
import "../styles/layout.css";

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
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
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
