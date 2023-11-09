import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPurchaseService } from "../services/purchaseShow.service";

export const getPurchaseAction = createAsyncThunk(
  "purchase/getPurchase",
  async () => {
    try {
      const purchase = await getPurchaseService();
      return purchase;
    } catch (err) {
      throw new Error(err);
    }
  }
);
