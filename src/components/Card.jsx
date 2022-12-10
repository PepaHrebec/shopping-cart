import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: clamp(260px, 30%, 400px);
`;

const Image = styled.img`
  width: 100%;
`;

const Bottom = styled.div`
  margin: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const LeftDiv = styled.div`
  justify-self: end;
`;

const BottomSmall = styled.div`
  margin-top: 5px;
  grid-column: span 2;
  font-weight: 100;
  font-size: small;
`;

const Card = (props) => {
  return (
    // src={`/imgs/hotdog${props.id}.webp`}
    <Wrapper>
      <Image src="/imgs/hotdog1.webp" alt="" />
      <Bottom>
        <div>{props.name}</div>
        <LeftDiv>{props.price}$</LeftDiv>
        <BottomSmall>{props.describe}</BottomSmall>
      </Bottom>
    </Wrapper>
  );
};

export { Card };
