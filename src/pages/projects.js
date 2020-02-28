import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "gatsby";

import SEO from "../components/seo";

const ProjectsPage = ({ location }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <SEO title="Gintaras Stankus - Projects" />
      <h1>Hi from the projects page</h1>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default ProjectsPage;
