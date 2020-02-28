import React from "react";
import styled from "styled-components";

import { media } from "../styles/mixins";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: 41vh;
`;

const TextBlock = styled.div`
  margin: 0 3rem;
  padding-top: 1rem;

  ${media.xs`
    padding-top: 3rem;
  `}

  ${media.md`
    /* padding-top: 4rem; */
    padding-top: 0;
    margin-right: 15%;
  `}
`;

const Text = styled.p`
  font-size: 1.25rem;
  text-align: right;
  max-width: 600px;
  margin-left: auto;
  line-height: 1.75;

  ${media.sm`
    font-size: 1.75rem;
  `}

  ${media.md`
    font-size: 2rem;
  
  `}
`;

const HeroBottom = () => (
  <Container>
    <TextBlock>
      <Text>
        I'm a developer with a passion for full-stack web development.
      </Text>
      <Text>I &#10084; javascript and minimalistic UI/UX.</Text>
    </TextBlock>
  </Container>
);

export default HeroBottom;
