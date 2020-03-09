import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import SEO from "../components/seo";
import { sizes } from "../styles/variables";
import { media } from "../styles/mixins";
import Portfolio from "../components/Portfolio/portfolio";

const Container = styled.article`
  padding: 0 1rem;
  max-width: 48rem;
  margin: 0 auto;

  ${media.md`
    padding: 0 2.25rem;
  `}
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 3rem;
`;

const ProjectsPage = ({ location }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <SEO title="Projects" slug={location.pathname} />
      <Heading>Projects</Heading>
      <Portfolio />
    </Container>
  );
};

export default ProjectsPage;
