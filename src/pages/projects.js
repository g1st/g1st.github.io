import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import { media } from "../styles/mixins";
import Portfolio from "../components/Portfolio/portfolio";

const Container = styled.article`
  padding: 0 1rem;
  max-width: 48rem;
  margin: 0 auto 6rem auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  padding-left: 1rem;
  text-align: center;
  margin-bottom: 1rem;

  ${media.xs`
    font-size: 3rem;
    margin-bottom: 4rem;
  `}
`;

const ProjectsPage = ({ location }) => {
  return (
    <Container>
      <SEO title="Projects" slug={location.pathname} />
      <Heading>Projects</Heading>
      <Portfolio />
    </Container>
  );
};

export default ProjectsPage;
