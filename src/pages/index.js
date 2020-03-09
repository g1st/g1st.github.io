import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";

const IndexPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <SEO title="Home" />
      <Hero />
    </>
  );
};
export default IndexPage;
