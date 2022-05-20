import { render, screen } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";

import { Header } from "./Header";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders Header and expects text", () => {
  render(<Header/>)
  const result = screen.queryByRole('h1',{ name: 'Henri Johansson'});
  expect(result);
});
