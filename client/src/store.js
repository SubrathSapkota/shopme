import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./context/ShopContext";
import cartReducer from "./context/CartContext";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
