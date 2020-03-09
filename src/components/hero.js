import React from "react";
import styled from "styled-components";

import HeroTop from "./heroTop";
import HeroBottom from "./heroBottom";
import { sizes } from "../styles/variables";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  margin-top: -${sizes.headerHeight};
`;

const Hero = () => (
  <Container>
    <HeroTop />
    <HeroBottom />
  </Container>
);

export default Hero;
