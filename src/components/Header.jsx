import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  color: white;
`;

const Icon = styled.img`
  width: 45px;
`;

const Cursive = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 42px;
  color: black;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={"/shop"}>
        {/* <Icon src="https://img.icons8.com/avantgarde/100/null/hot-dog.png" /> */}
        <Icon src="https://img.icons8.com/laces/64/null/hot-dog.png" />
      </Link>
      <Link to={"/"}>
        <Cursive>Glizzy Goblins'</Cursive>
      </Link>
      <Link to={"/checkout"}>
        <Icon src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/null/external-picnic-entertainment-xnimrodx-lineal-xnimrodx.png" />
      </Link>
    </HeaderStyled>
  );
};

export { Header };
