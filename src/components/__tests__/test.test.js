import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import { dark } from "../../styles/theme";

const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
`;

const Title = () => <Button theme={dark}>Tests are working</Button>;

test("Tests works", () => {
  const { getByText } = render(<Title />);
  const button = getByText(/working/i);

  expect(button).toHaveTextContent("Tests are working");
});

test("Works with styled component", () => {
  const { container } = render(<Title />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("color", dark.colors.primary);
});
