import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import RouteSwitch from "./RouteSwitch";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Martian Mono", monospace;
  }
  a:link {
  text-decoration: none;
  }

  a:visited {
  text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouteSwitch />
  </React.StrictMode>
);
