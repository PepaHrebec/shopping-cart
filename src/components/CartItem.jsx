import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px black dotted;
  margin-bottom: 10px;
`;

const Text = styled.div`
  width: 40%;
`;

const Button = styled.button`
  font-family: "Martian Mono", monospace;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 20%;
`;

const Price = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const RemoveItem = styled.button`
  padding: 8px;
  cursor: pointer;
  border: solid 2px black;
  &:hover {
    color: white;
    padding: 8px;
    background-color: red;
    border: solid 2px white;
  }
`;

const CartItem = (props) => {
  return (
    <ItemWrapper>
      <Text>
        <Link to={`/shop/${props.id}`}>{props.name}</Link>
      </Text>
      <ButtonWrap>
        <Button id={`${props.id}`} onClick={props.clickMinus}>
          -
        </Button>
        <div>{props.amount}</div>
        <Button id={`${props.id}`} onClick={props.clickPlus}>
          +
        </Button>
      </ButtonWrap>
      <Price>{props.price} $</Price>
      <RemoveItem id={`${props.id}`} onClick={props.clicked}>
        Remove
      </RemoveItem>
    </ItemWrapper>
  );
};

export { CartItem };
