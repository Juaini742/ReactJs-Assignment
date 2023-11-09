import { createAsyncThunk } from "@reduxjs/toolkit";
import { getKelService } from "../services/kel.service";

export const getKelAction = createAsyncThunk("kel/getKel", async (kelId) => {
  try {
    const kel = await getKelService(kelId);
    return kel;
  } catch (err) {
    throw new Error(err);
  }
});
