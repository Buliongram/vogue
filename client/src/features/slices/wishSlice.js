import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = JSON.parse(localStorage.getItem("Vogue__Wishlist")) || [];

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const findInWishlist = state.findIndex(
        (el) => el.id === action.payload.id
      );

      if (findInWishlist > -1) {
        toast.success("Product available in wishlist", { id: "123" });
      } else {
        toast.success("Product added to wishlist", { id: "123" });
        state.push({ ...action.payload, qty: 1 });
        localStorage.setItem("Vogue__Wishlist", JSON.stringify(state));
      }
    },

    removeFromWishlist(state, action) {
      const productIndex = state.findIndex((el) => el.id === action.payload.id);
      state.splice(productIndex, 1);
      toast.success("Product removed from wishlist", { id: "123" });
      localStorage.setItem("Vogue__Wishlist", JSON.stringify(state));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishSlice.actions;
export default wishSlice.reducer;
