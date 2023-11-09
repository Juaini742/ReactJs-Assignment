import { createSlice } from "@reduxjs/toolkit";
import { addToBasket } from "../actions/basketShow.action";

const initialState = {
  basket: [],
  totalPrice: 0,
  status: "idle",
  error: null,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.basket.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.basket.find((item) => item.id === id);
      if (itemToUpdate && itemToUpdate.quantity > 0) {
        itemToUpdate.quantity--;
      }
    },
    clearBasket: (state) => {
      state.basket = [];
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToBasket.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addToBasket.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.basket = action.payload;
    });
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { increaseQuantity, decreaseQuantity, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
