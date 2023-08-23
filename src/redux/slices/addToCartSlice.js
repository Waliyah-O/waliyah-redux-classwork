// cartSlice.js

import { createSelector } from "@reduxjs/toolkit";

export const getCartItemCount = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);
