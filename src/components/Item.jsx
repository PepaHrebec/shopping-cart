import { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../RouteSwitch";

const Wrapper = styled.div`
  height: clamp(250px, 50%, 600px);
  width: clamp(400px, 80%, 800px);
  display: flex;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ImgStyled = styled.img`
  height: 250px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const SmallText = styled.div`
  font-weight: 100;
  font-size: small;
  padding: 10px 0 20px 0;
  border-bottom: 2px dashed black;
`;

const InpWrap = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Inp = styled.input`
  width: 30%;
  margin-right: 5px;
  padding: 10px;
  font-family: "Martian Mono", monospace;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PlusMinusWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButtonPM = styled.button`
  border: none;
  background-color: white;
  font-size: 1.5rem;
  padding: 10px;
  margin: 0 5px 0 5px;
  cursor: pointer;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  border: solid black 2px;
  font-family: "Martian Mono", monospace;
  background-color: ${(props) => (props.amount < 1 ? "white" : "lightgreen")};
  cursor: ${(props) => (props.amount < 1 ? "auto" : "pointer")};
`;

const Item = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeAmountBy = (val) => {
    if (amount === 0 && val === -1) {
      return null;
    } else {
      setAmount(Number(amount) + Number(val));
    }
  };

  const buy = () => {
    let val = Number(document.querySelector("#Input").value);
    if (val !== 0) {
      cart[props.id] += val;
      setCart([...cart]);
      console.log(cart);
    }
  };

  const clearedInput = () => {
    let val = document.querySelector("#Input").value;
    if (val === "" || val < 0) {
      setAmount(0);
    }
  };

  return (
    <Wrapper>
      <ImgStyled src={props.src} />
      <RightSide>
        <Name>{props.name}</Name>
        <SmallText>{props.describe}</SmallText>
        <InpWrap>
          <PlusMinusWrap>
            <Inp
              id="Input"
              type={"number"}
              min="0"
              value={amount}
              onChange={(e) => {
                changeAmount(e);
              }}
              onBlur={() => {
                clearedInput();
              }}
            />
            <StyledButtonPM
              onClick={() => {
                changeAmountBy(-1);
              }}
            >
              -
            </StyledButtonPM>
            <StyledButtonPM
              onClick={() => {
                changeAmountBy(1);
              }}
            >
              +
            </StyledButtonPM>
            <BuyButton
              amount={amount}
              onClick={() => {
                buy();
              }}
            >
              Add to cart
            </BuyButton>
          </PlusMinusWrap>
        </InpWrap>
      </RightSide>
    </Wrapper>
  );
};

export { Item };
