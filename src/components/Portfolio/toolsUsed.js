import React from "react";
import styled from "styled-components";

import ReactSVG from "../../assets/tools-svg/rx_logo.svg";
import NodeSVG from "../../assets/tools-svg/Node.js_logo.svg";
import MongoSVG from "../../assets/tools-svg/mongodb.svg";
import MaterialSVG from "../../assets/tools-svg/material-ui2.svg";
import NextSVG from "../../assets/tools-svg/next-js.svg";
import ExpressSVG from "../../assets/tools-svg/express.svg";

const Tools = styled.div`
  background: ${({ theme }) =>
    theme.name === "dark" ? theme.colors.text : "none"};
  border-radius: 3px;
  display: inline-flex;
  margin: 1rem 0;
  max-width: 590px;
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

const ToolsUsed = props => (
  <Tools>
    {props.mongo && (
      <Tool>
        <MongoSVG />
      </Tool>
    )}
    {props.node && (
      <Tool>
        <NodeSVG />
      </Tool>
    )}
    {props.express && (
      <Tool>
        <ExpressSVG />
      </Tool>
    )}
    {props.react && (
      <Tool>
        <ReactSVG />
      </Tool>
    )}
    {props.nextjs && (
      <Tool>
        <NextSVG />
      </Tool>
    )}
    {props.material && (
      <Tool>
        <MaterialSVG />
      </Tool>
    )}
  </Tools>
);

export default ToolsUsed;
