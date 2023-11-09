import { createSlice } from "@reduxjs/toolkit";
import { getDataProductsAction } from "../actions/products.action";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataProductsAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDataProductsAction.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(getDataProductsAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
