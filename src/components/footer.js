import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled, { ThemeContext } from "styled-components";

import { media } from "../styles/mixins";

const Container = styled.footer`
  width: 100%;
  height: 6rem;
  background: ${({ theme }) => theme.colors.footer};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.8rem;
`;

const Footer = ({ path }) => (
  <Container>
    <Text>&copy; Gintaras Stankus 2020</Text>
  </Container>
);

export default Footer;
