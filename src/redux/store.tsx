import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
