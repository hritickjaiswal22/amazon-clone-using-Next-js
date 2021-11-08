import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { userId: null, userName: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    saveUser(currentState, action) {
      currentState.userId = action.payload;
    },
    saveUserName(currentState, action) {
      currentState.userName = action.payload;
    },
  },
});

export const { saveUser, saveUserName } = authSlice.actions;

export default authSlice.reducer;
