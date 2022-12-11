import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Item } from "../components/Item";
import data from "../data.json";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemPage = () => {
  const dynamic = useParams();
  const itemObj = data.menu[dynamic.id];

  return (
    <Wrapper>
      <Header />
      <CardWrapper>
        <Item
          name={itemObj.name}
          src={itemObj.src}
          describe={itemObj.describe}
        />
      </CardWrapper>
    </Wrapper>
  );
};

export { ItemPage };
