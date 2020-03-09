import React from "react";
import { MDXProvider } from "@mdx-js/react";
import SyntaxHighlighter from "./syntaxHighlighter";

const components = {
  pre: props => <SyntaxHighlighter {...props} />,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
