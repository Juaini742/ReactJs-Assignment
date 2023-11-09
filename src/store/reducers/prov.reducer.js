import { createSlice } from "@reduxjs/toolkit";
import { getProvAction } from "../actions/prov.action";

const initialState = {
  prov: [],
  selectedProvId: null,
};

const provSlice = createSlice({
  name: "prov",
  initialState,
  reducers: {
    setSelectedProvId(state, action) {
      state.selectedProvId = action.payload;
      state.prov = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvAction.fulfilled, (state, action) => {
      state.prov = action.payload.data;
    });
  },
});

export const { setSelectedProvId } = provSlice.actions;
export default provSlice.reducer;
