import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import textReducer from "./slices/textSlice";

//slices


export const store = configureStore({
	reducer: {
		cart: cartReducer,
		text: textReducer
	},
})