// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    // You can also add remove from cart, update quantity, and other actions here
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
