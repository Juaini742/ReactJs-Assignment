import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAllBasketsFromAPI } from "../services/basketShow.service";

export const deleteAllBaskets = createAsyncThunk(
  "basket/deleteAllBaskets",
  async () => {
    try {
      await clearAllBasketsFromAPI();
      return [];
    } catch (error) {
      throw new Error("Failed to clear all baskets");
    }
  }
);
