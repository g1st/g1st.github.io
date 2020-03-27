import React from "react";
import Tools from "../Portfolio/toolsUsed";
import { render } from "@testing-library/react";

test("Tools don't render anything when no props passed", () => {
  const { queryByTitle } = render(<Tools />);
  const Tool = queryByTitle(/\w/);

  expect(Tool).toBeNull();
});

test("Tools render single SVG when single prop is passed", () => {
  const { queryByTitle } = render(<Tools mongo />);
  const Tool = queryByTitle(/mongodb/i);

  expect(Tool).not.toBeNull();
});

test("Tools render multiple SVG when multiple props are passed", () => {
  const { queryAllByTitle } = render(
    <Tools mongo node express react nextjs material gatsby graphql styled />
  );
  const Tool = queryAllByTitle(/\w/);

  expect(Tool).toHaveLength(9);
});

// expect(Tool).toHaveTextContent("Tests are working");
