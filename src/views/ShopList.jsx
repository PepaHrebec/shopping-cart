import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import data from "../data.json";

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
        {data.menu.map((item) => {
          return (
            <Card
              name={item.name}
              price={item.price}
              describe={item.describe}
              src={item.src}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
};

export { ShopList };
