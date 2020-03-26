import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import { media, TextLink } from "../styles/mixins";
import Portfolio from "../components/Portfolio/portfolio";

const Container = styled.article`
  padding: 0 1rem;
  max-width: 48rem;
  margin: 0 auto 6rem auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  padding-left: 1rem;
  text-align: center;
  margin-bottom: 1rem;

  ${media.xs`
    font-size: 3rem;
    margin-bottom: 4rem;
  `}
`;
const MoreProjects = styled.p`
  padding: 2rem 1rem;
`;

const ProjectsPage = ({ location }) => {
  return (
    <Container>
      <SEO title="Projects" slug={location.pathname} />
      <Heading>Projects</Heading>
      <Portfolio />
      <MoreProjects>
        More projects and code examples you can{" "}
        <TextLink
          href="https://github.com/g1st"
          rel="noreferrer noopener"
          target="_blank"
        >
          find at my github
        </TextLink>
        .
      </MoreProjects>
    </Container>
  );
};

export default ProjectsPage;
