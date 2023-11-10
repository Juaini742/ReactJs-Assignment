import { createSlice } from "@reduxjs/toolkit";
import { postQouteAction } from "../actions/qouteAdd.action";

const initialState = {
  qoute: null,
};

const qouteSlice = createSlice({
  name: "qoute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQouteAction.fulfilled, (state, action) => {
        state.qoute = action.payload;
      })
      .addCase(postQouteAction.rejected, (action) => {
        console.error("Failed to make a purchase", action.error.message);
      });
  },
});

export default qouteSlice.reducer;
