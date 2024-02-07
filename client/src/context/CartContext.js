import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../data/all_product";



const initialState = {
  cartItems: [],
  totalItemPrice: 0,
  isLoading: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setAddToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        const addItems = {
          ...allProducts.find((item) => item.id === action.payload),
          quantity: 1,
        };
        state.cartItems.push(addItems);
      }
    },

    deleteItem: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newItems;
    },

    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },

    totalPrice: (state, action) => {
      const totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.new_price * item.quantity;
      }, 0);

      state.totalItemPrice = totalPrice;
    },
  },
});

export const {
  setAddToCart,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
  deleteItem,
} = CartSlice.actions;

export default CartSlice.reducer;
