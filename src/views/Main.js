import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function Main() {
  return (
    <Wrapper>
      <Header />
      <Hero />
    </Wrapper>
  );
}

export default Main;
