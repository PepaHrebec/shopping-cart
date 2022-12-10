import styled from "styled-components";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
`;

const ShopList = () => {
  return (
    <Wrapper>
      <Header />
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Wrapper>
  );
};

export { ShopList };
