import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducer: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    LoginFailure: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, loginFailure } = authReducer.actions;
export default authReducer;
