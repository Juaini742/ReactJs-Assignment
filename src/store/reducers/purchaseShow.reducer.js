import { createSlice } from "@reduxjs/toolkit";
import { getPurchaseAction } from "../actions/purchaseShow";

const initialState = {
  purchase: [],
  status: "idle",
  error: null,
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPurchaseAction.fulfilled, (state, action) => {
      state.status = "successful";
      state.purchase = action.payload;
    });
    builder.addCase(getPurchaseAction.rejected, (state, action) => {
      state.status = "failed";
      state.purchase = action.error.message;
    });
  },
});

export default purchaseSlice.reducer;
