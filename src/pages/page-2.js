import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    console.log(props);
  }};
`;

const SecondPage = props => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <h1>About Styled Components</h1>
      <p>Styled Components is cool</p>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  );
};

export default SecondPage;
