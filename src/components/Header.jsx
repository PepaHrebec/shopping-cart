import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  color: white;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div>Logo</div>
      <div>Name</div>
      <div>Icons</div>
    </HeaderStyled>
  );
};

export { Header };
