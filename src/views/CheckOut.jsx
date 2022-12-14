import styled from "styled-components";
import { Header } from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../RouteSwitch";
import data from "../data.json";
import { CartItem } from "../components/CartItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckOut = () => {
  const { cart, setCart } = useContext(CartContext);

  const remove = (e) => {
    let id = e.target.id;
    cart[id] = 0;
    setCart([...cart]);
  };

  return (
    <Wrapper>
      <Header />
      <CartWrapper>
        {data.menu.map((obj) => {
          return cart[obj.id] !== 0 ? (
            <CartItem
              id={obj.id}
              name={
                obj.name.length > 20 ? `${obj.name.slice(0, 20)}...` : obj.name
              }
              amount={cart[obj.id]}
              price={(cart[obj.id] * Number(obj.price)).toFixed(2)}
              clicked={remove}
              key={obj.id}
            />
          ) : null;
        })}
      </CartWrapper>
    </Wrapper>
  );
};

export { CheckOut };
