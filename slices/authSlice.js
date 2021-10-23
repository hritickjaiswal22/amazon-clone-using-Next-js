import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { user: undefined, userName: undefined };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    saveUser(currentState, action) {
      currentState.user = action.payload;
    },
    saveUserName(currentState, action) {
      currentState.userName = action.payload;
    },
  },
});

export const { saveUser, saveUserName } = authSlice.actions;

export default authSlice.reducer;
