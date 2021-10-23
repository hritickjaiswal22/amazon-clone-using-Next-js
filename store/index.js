import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    authState: authReducer,
  },
});

export default store;
