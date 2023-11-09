import { createSlice } from "@reduxjs/toolkit";
import { getKabAction } from "../actions/kab.action";

const initialState = {
  kab: [],
  selectedProvId: null,
};

const kabSlice = createSlice({
  name: "kab",
  initialState,
  reducers: {
    setSelectedProvId(state, action) {
      state.selectedProvId = action.payload;
      state.kab = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getKabAction.fulfilled, (state, action) => {
      state.kab = action.payload.data;
    });
  },
});

export const { setSelectedProvId } = kabSlice.actions;
export default kabSlice.reducer;
