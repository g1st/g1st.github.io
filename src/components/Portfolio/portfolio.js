import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { media, AnchorLink } from "../../styles/mixins";
import Tools from "./toolsUsed";

const ProjectCard = styled.section`
  padding: 2rem 1rem;
  border-radius: 3px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 1rem;

  ${media.xs`
    display: flex;
  `};
`;

const ImageWrapper = styled.div`
  margin: 0 auto 2rem auto;
  max-width: 325px;

  ${media.xs`
    width: 325px;
  `}
`;

const Desc = styled.div`
  ${media.xs`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    flex-grow: 2;
    justify-content: center;
  `}

  ${media.sm`
    margin-left: 3rem;
  `}

  ${media.md`
    margin-left: 4rem;
  `}
`;

const CardTitle = styled.h3`
  font-size: 2rem;
`;

const CardInfo = styled.p`
  margin-bottom: 2rem;
`;

const Buttons = styled.div`
  margin-bottom: 2rem;
`;

const Link = styled(AnchorLink)`
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      dovileJewellery: file(relativePath: { eq: "dovilejewellery.png" }) {
        ...mobileFrame
      }
      portfolioLight: file(relativePath: { eq: "portfolio-light.png" }) {
        ...mobileFrame
      }
      portfolioDark: file(relativePath: { eq: "portfolio-dark.png" }) {
        ...mobileFrame
      }
    }
  `);

  const theme = useContext(ThemeContext);

  return (
    <>
      <ProjectCard>
        <ImageWrapper>
          <Img fluid={data.dovileJewellery.childImageSharp.fluid} />
        </ImageWrapper>
        <Desc>
          <CardTitle>Dovile Jewellery</CardTitle>
          <CardInfo>
            Jewellery artist's portfolio and an e-commerce app
          </CardInfo>
          <Buttons>
            <Link
              aria-label="View live page"
              href="https://dovilejewellery.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
            <Link
              aria-label="View page source"
              href="https://github.com/g1st/do-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </Link>
          </Buttons>
          <Tools mongo node express react nextjs material />
        </Desc>
      </ProjectCard>
      <ProjectCard>
        <ImageWrapper>
          {theme.name === "dark" ? (
            <Img fluid={data.portfolioDark.childImageSharp.fluid} />
          ) : (
            <Img fluid={data.portfolioLight.childImageSharp.fluid} />
          )}
        </ImageWrapper>
        <Desc>
          <CardTitle>Portfolio site</CardTitle>
          <CardInfo>
            Portfolio which you are currently looking at{" "}
            <span role="img" aria-label="Smiley face">
              🙃
            </span>
            .
          </CardInfo>
          <Buttons>
            <Link
              aria-label="View live page"
              href="https://dovilejewellery.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
            <Link
              aria-label="View page source"
              href="https://github.com/g1st/do-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </Link>
          </Buttons>
          <Tools react gatsby graphql styled />
        </Desc>
      </ProjectCard>
    </>
  );
};

export default Portfolio;
