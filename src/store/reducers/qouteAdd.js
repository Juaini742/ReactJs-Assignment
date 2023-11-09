import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qoute: [],
};

const qouteReducer = createSlice({
  name: "qoute",
  initialState,
  reducers: {
    saveQouteSuccess: (state, action) => {
      state.qoute = action.payload;
    },
    saveQouteFailure: (state, action) => {
      console.error("Failed to make a purchase", action.payload);
    },
  },
});

export const { saveQouteSuccess, saveQouteFailure } = qouteReducer.actions;
export default qouteReducer.reducer;
