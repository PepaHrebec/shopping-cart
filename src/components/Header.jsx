/** @jsxImportSource @emotion/react */

import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const Style = css`
  padding: 32px;
  background-color: hotpink;
  font-size: large;
  text-align: center;
  color: white;
  border-radius: 0 0 12px 12px;
`;

const Header = () => {
  return <header css={Style}>Golden Glizzys</header>;
};

export { Header };
