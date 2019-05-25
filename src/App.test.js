import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => {
      return {
        matches: true,
        addListener: jest.fn(() => {}),
        removeListener: jest.fn(() => {})
      };
    })
  });

  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
