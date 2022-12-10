import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroStyled = styled.div`
  flex: 1 1 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("./imgs/dog.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const HeroName = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 80px;
  color: white;
  backdrop-filter: blur(3px);
`;

const HeroButton = styled.button`
  padding: 16px 40px;
  color: white;
  background: none;
  border-radius: 12px;
  border: solid 2px white;
`;

const Hero = () => {
  return (
    <HeroStyled>
      <HeroName>Golden Glizzy</HeroName>
      <Link to="/shop">
        <HeroButton>Shop</HeroButton>
      </Link>
    </HeroStyled>
  );
};

export { Hero };
