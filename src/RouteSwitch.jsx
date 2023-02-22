import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ItemPage } from "./views/ItemPage";
import Main from "./views/Main";
import { ShopList } from "./views/ShopList";
import { CheckOut } from "./views/CheckOut";

const CartContext = createContext(null);

const RouteSwitch = () => {
  const [cart, setCart] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const value = { cart, setCart };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<ShopList />} />
          <Route path="/shop/:id" element={<ItemPage />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
export { CartContext };
