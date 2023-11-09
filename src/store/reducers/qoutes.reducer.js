import { createSlice } from "@reduxjs/toolkit";
import { getQoutesAction } from "../actions/qoutes.action";

const initialState = {
  qoute: [],
  status: "idle",
  error: null,
};

const qoutesSlice = createSlice({
  name: "qoute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQoutesAction.fulfilled, (state, action) => {
      state.status = "successfully";
      state.qoute = action.payload;
    });
    builder.addCase(getQoutesAction.rejected, (state, action) => {
      state.status = "rejected";
      state.qoute = action.error.message;
    });
  },
});

export default qoutesSlice.reducer;
