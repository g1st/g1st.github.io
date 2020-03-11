import React from "react";
import styled from "styled-components";

import { sizes } from "../styles/variables";

const Container = styled.footer`
  width: 100%;
  height: ${sizes.footerHeight};
  background: ${({ theme }) => theme.colors.footer};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const Text = styled.span`
  font-size: 0.8rem;
`;

const Footer = () => (
  <Container>
    <Text>&copy; Gintaras Stankus 2020</Text>
  </Container>
);

export default Footer;
