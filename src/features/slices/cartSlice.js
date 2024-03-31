import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = JSON.parse(localStorage.getItem("Vogue__Cart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //find if the item has already been added to the cart
      const findInCart = state.findIndex((el) => el.id === action.payload.id);
      //   if the product is already in the cart
      if (findInCart > -1) {
        state.forEach((el) => {
          toast.success("Product successfully added to cart", { id: "123" });
          if (el.id === action.payload.id) el.qty = el.qty + 1;
          localStorage.setItem("Vogue__Cart", JSON.stringify(state));
        });
      } else {
        toast.success("Product successfully added to cart", { id: "123" });
        state.push({ ...action.payload, qty: 1 });
        localStorage.setItem("Vogue__Cart", JSON.stringify(state));
      }
    },
    // DECREASE IN CART
    changeInCart(state, action) {
      // for each element in the cart, if the element id matches the id we are sending from the payload , change the quantity to the quantity to the one coming  from the payload;
      state.forEach((el) => {
        if (el.id === action.payload.id) el.qty = Number(action.payload.qty);
      });
      localStorage.setItem("Vogue__Cart", JSON.stringify(state));
    },

    // REMOVE FROM CART
    removeFromCart(state, action) {
      const productIndex = state.findIndex((el) => el.id === action.payload.id);
      state.splice(productIndex, 1);
      localStorage.setItem("Vogue__Cart", JSON.stringify(state));
    },

    decreaseInCart(state, action) {
      state.forEach((el) => {
        if (el.qty === 1) {
          return;
        } else if (el.id === action.payload.id) el.qty = el.qty - 1;
        localStorage.setItem("Vogue__Cart", JSON.stringify(state));
      });
    },
    increaseInCart(state, action) {
      state.forEach((el) => {
        if (el.id === action.payload.id) el.qty = el.qty + 1;
        localStorage.setItem("Vogue__Cart", JSON.stringify(state));
      });
    },

    addGiftToCart: (state, action) => {
      //find if the item has already been added to the cart
      const findInCart = state.findIndex((el) => el.id === action.payload.id);
      //   if the product is already in the cart
      if (findInCart > -1) {
        toast.error("Gift wrapping is already in your cart", {
          id: "123",
        });
      } else {
        toast.success("Gift wrapping successfully added to cart", {
          id: "123",
        });
        state.push({ ...action.payload, qty: 1 });
        localStorage.setItem("Vogue__Cart", JSON.stringify(state));
      }
    },
  },
});

export const {
  addToCart,
  changeInCart,
  removeFromCart,
  decreaseInCart,
  increaseInCart,
  addGiftToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
