import React, { useContext } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import styled, { ThemeContext } from "styled-components";
import { copyToClipboard } from "../../utils/copy-to-clipboard";

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  position: relative;
  overflow: hidden;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`;

const SyntaxHighlighter = ({ children: { props } }) => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    copyToClipboard(props.children.trim());
  };

  if (props.mdxType === "code") {
    const className = props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);

    return (
      <Highlight
        {...defaultProps}
        code={props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        theme={theme.name === "dark" ? darkTheme : lightTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            <CopyCode onClick={handleClick}>Copy</CopyCode>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    );
  }
};

export default SyntaxHighlighter;
