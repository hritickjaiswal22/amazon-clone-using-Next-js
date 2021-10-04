import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
