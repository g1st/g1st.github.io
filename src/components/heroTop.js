import React from "react";
import styled from "styled-components";

import TypeWriter from "./typeWriter";
import { media } from "../styles/mixins";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 60vh;
  transform: skewY(-10deg);
  transform-origin: bottom left;
  position: relative;
`;

const TextBlock = styled.div`
  transform: skewY(10deg);
  position: absolute;
  padding-right: 1.5rem;
  top: 45%;
  left: 20%;

  ${media.xs`
    left: 16%;
  `}

  ${media.sm`
    top: 50%;
  `}
`;

const Heading = styled.h1`
  font-size: 2.5rem;

  ${media.sm`
    font-size: 4rem;
  `}

  ${media.md`
    font-size: 5rem;
  `}
`;

const HeroTop = () => (
  <Container>
    <TextBlock>
      <Heading>Hi, I am Johnatan</Heading>
      <TypeWriter
        messages={[
          "front end developer",
          "back end developer",
          "full stack developer",
        ]}
        speed={500}
      />
    </TextBlock>
  </Container>
);

export default HeroTop;
