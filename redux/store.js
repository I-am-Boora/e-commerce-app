import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./addToCartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
