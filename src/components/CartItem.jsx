import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  width: 80%;
  justify-content: space-between;
  border-bottom: 1px black dotted;
  margin-bottom: 10px;
`;

const Text = styled.div`
  width: 40%;
`;

const Price = styled.div`
  width: 15%;
`;

const CartItem = (props) => {
  return (
    <ItemWrapper>
      <Text>
        <Link to={`/shop/${props.id}`}>{props.name}</Link>
      </Text>
      <div>{props.amount}</div>
      <Price>{props.price} $</Price>
      <button id={`${props.id}`} onClick={props.clicked}>
        Remove
      </button>
    </ItemWrapper>
  );
};

export { CartItem };
