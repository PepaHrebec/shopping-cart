import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: clamp(100px, 40%, 200px);
  width: clamp(300px, 80%, 800px);
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

const Item = (props) => {
  const [amount, setAmount] = useState(0);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Wrapper>
      <ImgStyled src={props.src} />
      <RightSide>
        <Name>{props.name}</Name>
        <SmallText>{props.describe}</SmallText>
        <InpWrap>
          <Inp
            type={"number"}
            min="0"
            value={amount}
            onChange={(e) => {
              changeAmount(e);
            }}
          />
        </InpWrap>
      </RightSide>
    </Wrapper>
  );
};

export { Item };
