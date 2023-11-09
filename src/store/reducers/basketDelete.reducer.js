// basketReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { deleteBasket } from "../actions/basketDelete.action";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteBasket.fulfilled, (state, action) => {
      state.basket = action.payload;
    });
  },
});

export default basketSlice.reducer;
