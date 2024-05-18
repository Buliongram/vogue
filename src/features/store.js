import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "./slices/wishSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishSlice,
    cart: cartSlice,
  },
});
