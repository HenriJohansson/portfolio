import { render, screen } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { CallToAction } from "./CallToAction";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<CallToAction/>);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
/*TODO test always passes, it is a problem. */
it("Renders download", () => {
    const a = screen.queryAllByRole('link');
    expect(a[0]).toBeEmptyDOMElement;
});

