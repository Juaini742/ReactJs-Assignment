import { createAsyncThunk } from "@reduxjs/toolkit";
import { getKabService } from "../services/kab.service";

export const getKabAction = createAsyncThunk(
  "kab/getKab",
  async (provinsiId) => {
    try {
      const kab = await getKabService(provinsiId);
      return kab;
    } catch (err) {
      throw new Error(err);
    }
  }
);
