import React from "react";
import styled from "styled-components";

import TypeWriter from "./typeWriter";
import { media } from "../styles/mixins";
import { sizes } from "../styles/variables";

const Container = styled.div`
  background: linear-gradient(
    165deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.secondary} 50%,
    ${({ theme }) => theme.colors.secondary}
  );
  padding: 0 2rem;
  min-height: calc(100vh - ${sizes.headerHeight});
  display: grid;
  grid-row-gap: 1rem;

  ${media.sm`
    padding: 0;
  `};

  ${media.lg`
    padding: 0 3rem;
  `};
`;

const Top = styled.div`
  text-align: center;
  align-self: center;

  ${media.sm`
      text-align: left;
  `}
`;

const Bottom = styled.div`
  align-self: center;
  text-align: center;
  padding-top: 3rem;

  ${media.sm`
    text-align: right;
  `}
`;

const Heading = styled.h1`
  font-size: 1.75rem;

  ${media.sm`
    font-size: 3rem;
    margin-left: 6rem;
  `}

  ${media.lg`
    font-size: 4rem;
  `}

  ${media.xl`
    font-size: 5rem;
    margin-left: 14rem;
  `}
`;

const HeightWrapper = styled.div`
  height: 1.5rem;

  ${media.sm`
    height: 2rem;
    margin-left: 6rem;
  `}

  ${media.md`
    height: 3rem;
  `}

  ${media.xl`
    margin-left: 14rem;
  `}
`;

const LineOne = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textDark};
   ${media.sm`
    font-size: 1.5rem;
    margin-right: 6rem;
  `} ${media.lg`
    font-size: 2rem;
  `} ${media.xl`
    font-size: 2.5rem;
    margin-right: 14rem;

  `};
`;

const LineTwo = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textDark};

  ${media.sm`
    font-size: 1.5rem;
     margin-right: 6rem;
  `}

  ${media.lg`
    font-size: 2rem;
  `}

  ${media.xl`
    font-size: 2.5rem;
    margin-right: 14rem;
  `}
`;

const Hero = () => (
  <Container>
    <Top>
      <Heading>Hi, I am Gintaras</Heading>
      <HeightWrapper>
        <TypeWriter
          messages={[
            "web developer",
            "javascript developer",
            "front-end developer",
            "back-end developer",
            "full-stack developer",
          ]}
          speed={500}
        />
      </HeightWrapper>
    </Top>
    <Bottom>
      <LineOne>I create responsive and accessible web apps.</LineOne>
      <LineTwo>
        <span role="img" aria-label="Heart">
          &#10084;
        </span>{" "}
        javascript and{" "}
        <span role="img" aria-label="Basketball">
          &#127936;
        </span>
      </LineTwo>
    </Bottom>
  </Container>
);

export default Hero;
