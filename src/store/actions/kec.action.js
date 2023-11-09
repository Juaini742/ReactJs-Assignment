import { createAsyncThunk } from "@reduxjs/toolkit";
import { getKecService } from "../services/kec.service";

export const getKecAction = createAsyncThunk("kec/getKec", async (kabId) => {
  try {
    const kec = await getKecService(kabId);
    return kec;
  } catch (err) {
    throw new Error(err);
  }
});
