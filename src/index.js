import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ShopList } from "./ShopList";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/shop/:id" />
        <Route path="/checkout" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
