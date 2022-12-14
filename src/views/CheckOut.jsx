import styled from "styled-components";
import { Header } from "../components/Header";
import { useContext, useEffect, useState } from "react";
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
  margin-bottom: 20px;
`;

const Total = styled.div`
  width: 80%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CheckOut = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const remove = (e) => {
    let id = e.target.id;
    cart[id] = 0;
    setCart([...cart]);
  };

  const changeAmount = (e, num) => {
    let id = e.target.id;
    if (cart[id] === 1 && num === -1) {
      return null;
    } else {
      cart[id] += num;
      setCart([...cart]);
    }
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i] * data.menu[i].price;
    }
    setTotal(total);
  }, [cart]);

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
              clickMinus={(e) => changeAmount(e, -1)}
              clickPlus={(e) => changeAmount(e, 1)}
              key={obj.id}
            />
          ) : null;
        })}
        <Total>Total: {Number(total).toFixed(2)} $</Total>
      </CartWrapper>
    </Wrapper>
  );
};

export { CheckOut };
