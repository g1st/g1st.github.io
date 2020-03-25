import React from "react";
import styled from "styled-components";

import ReactSVG from "../../assets/tools-svg/rx_logo.svg";
import NodeSVG from "../../assets/tools-svg/Node.js_logo.svg";
import MongoSVG from "../../assets/tools-svg/mongodb.svg";
import MaterialSVG from "../../assets/tools-svg/material-ui2.svg";
import NextSVG from "../../assets/tools-svg/next-js.svg";
import ExpressSVG from "../../assets/tools-svg/express.svg";
import GatsbySVG from "../../assets/tools-svg/gatsby.svg";
import GraphqlSVG from "../../assets/tools-svg/graphql.svg";
import StyledSVG from "../../assets/tools-svg/styled-components.svg";

const Tools = styled.div`
  background: ${({ theme }) =>
    theme.name === "dark" ? theme.colors.text : "none"};
  border-radius: 3px;
  display: inline-flex;
  margin: 1rem 0;
  max-width: 22rem;
`;

const Tool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  padding: 0.5rem;

  svg {
    width: 100%;
    max-width: 100px;
    height: auto;
  }
`;

const ToolsUsed = ({
  mongo,
  node,
  express,
  react,
  nextjs,
  material,
  gatsby,
  graphql,
  styled,
}) => (
  <Tools>
    {mongo && (
      <Tool title="MongoDB">
        <MongoSVG />
      </Tool>
    )}
    {node && (
      <Tool title="Node">
        <NodeSVG />
      </Tool>
    )}
    {express && (
      <Tool title="Express">
        <ExpressSVG />
      </Tool>
    )}
    {react && (
      <Tool title="React">
        <ReactSVG />
      </Tool>
    )}
    {nextjs && (
      <Tool title="Next.js">
        <NextSVG />
      </Tool>
    )}
    {material && (
      <Tool title="Material UI">
        <MaterialSVG />
      </Tool>
    )}
    {gatsby && (
      <Tool title="Gatsby">
        <GatsbySVG />
      </Tool>
    )}
    {graphql && (
      <Tool title="Graph QL">
        <GraphqlSVG />
      </Tool>
    )}
    {styled && (
      <Tool title="styled components">
        <StyledSVG />
      </Tool>
    )}
  </Tools>
);

export default ToolsUsed;
