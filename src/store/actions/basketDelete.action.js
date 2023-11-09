// basketActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBasket, deleteBasketFromAPI } from "../services/basketShow.service";

export const deleteBasket = createAsyncThunk(
  "basket/deleteBasket",
  async (id) => {
    try {
      await deleteBasketFromAPI(id);
      const updatedBasket = await getBasket();
      return updatedBasket;
    } catch (error) {
      throw new Error("Failed to delete from basket");
    }
  }
);
