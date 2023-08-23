import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer