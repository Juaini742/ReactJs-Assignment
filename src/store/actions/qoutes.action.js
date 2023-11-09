import { getQoutes } from "../services/qoutes.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQoutesAction = createAsyncThunk("qoute./getQoute", async () => {
  try {
    const qoute = await getQoutes();
    return qoute;
  } catch (err) {
    throw new Error(err);
  }
});
