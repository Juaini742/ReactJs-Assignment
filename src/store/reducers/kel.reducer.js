import { createSlice } from "@reduxjs/toolkit";
import { getKelAction } from "../actions/kel.ation";

const initialState = {
  kel: [],
  selectedKelId: null,
};

const kelSlice = createSlice({
  name: "kel",
  initialState,
  reducers: {
    selectedKelId(state, action) {
      state.selectedKelId = action.payload;
      state.kel = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getKelAction.fulfilled, (state, action) => {
      state.kel = action.payload.data;
    });
  },
});

export const { selectedKelId } = kelSlice.actions;
export default kelSlice.reducer;
