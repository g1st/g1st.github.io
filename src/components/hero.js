import React from "react";
import styled from "styled-components";

import HeroTop from "./heroTop";
import HeroBottom from "./heroBottom";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
`;

const Hero = () => (
  <Container>
    <HeroTop />
    <HeroBottom />
  </Container>
);

export default Hero;
