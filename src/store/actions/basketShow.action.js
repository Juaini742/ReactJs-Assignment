import { getBasket } from "../services/basketShow.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToBasket = createAsyncThunk("basket/addToBasket", async () => {
  try {
    const basket = await getBasket();
    return basket;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});
