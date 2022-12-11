import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import { ShopList } from "./views/ShopList";

const CartContext = createContext(null);

const RouteSwitch = () => {
  const [cart, setCart] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const value = { cart, setCart };

  return (
    <BrowserRouter>
      <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<ShopList />} />
          <Route path="/shop/:id" element={<div>Hello</div>} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
export { CartContext };
