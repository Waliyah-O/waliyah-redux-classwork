// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice";
// import productReducer from "./slices/productSlice";

// //slices

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     text: priceReducer,
//   },
// });


// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

