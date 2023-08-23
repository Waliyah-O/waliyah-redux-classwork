import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: ""
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.text = action.payload;
    },
  },
});


export const {changeCurrency} = textSlice.actions

export default textSlice.reducer