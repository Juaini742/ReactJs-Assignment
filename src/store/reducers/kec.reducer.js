import { createSlice } from "@reduxjs/toolkit";
import { getKecAction } from "../actions/kec.action";

const initialState = {
  kec: [],
  selectedKabId: null,
};

const kecSlice = createSlice({
  name: "kec",
  initialState,
  reducers: {
    setSelectedKabId(state, action) {
      state.selectedKabId = action.payload;
      state.kec = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getKecAction.fulfilled, (state, action) => {
      state.kec = action.payload.data;
    });
  },
});

export const { setSelectedKabId } = kecSlice.actions;
export default kecSlice.reducer;
