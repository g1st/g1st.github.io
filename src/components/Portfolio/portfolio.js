import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { media, AnchorLink } from "../../styles/mixins";
import Tools from "./toolsUsed";

const ProjectCard = styled.section`
  padding: 2rem 1rem;
  border-radius: 3px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 1rem;

  :last-child {
    border-bottom: none;
  }

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
      placeholderImage: file(relativePath: { eq: "dovilejewellery.png" }) {
        childImageSharp {
          fluid(maxWidth: 325) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <ProjectCard>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
        <Desc>
          <CardTitle>Dovile Jewellery</CardTitle>
          <CardInfo>
            Jewellery artist's portfolio and an e-commerce app
          </CardInfo>
          <Buttons>
            <Link aria-label="View live page">Live</Link>
            <Link aria-label="View page source">Source</Link>
          </Buttons>
          <Tools express react nextjs material />
        </Desc>
      </ProjectCard>
      <ProjectCard>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
        <Desc>
          <CardTitle>Dovile Jewellery</CardTitle>
          <CardInfo>
            Jewellery artist's portfolio and an e-commerce app
          </CardInfo>
          <Buttons>
            <Link aria-label="View live page">Live</Link>
            <Link aria-label="View page source">Source</Link>
          </Buttons>
          <Tools express react nextjs />
        </Desc>
      </ProjectCard>
      <ProjectCard>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
        <Desc>
          <CardTitle>Dovile Jewellery</CardTitle>
          <CardInfo>
            Jewellery artist's portfolio and an e-commerce app
          </CardInfo>
          <Buttons>
            <Link aria-label="View live page">Live</Link>
            <Link aria-label="View page source">Source</Link>
          </Buttons>
          <Tools />
        </Desc>
      </ProjectCard>
    </>
  );
};

export default Portfolio;
