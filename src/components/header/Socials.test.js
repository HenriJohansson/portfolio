import { render, screen } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { Socials } from "./Socials";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Socials/>);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
test('There are at least two links for socials ', () => {
    
});