import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = JSON.parse(localStorage.getItem("vogueWearsCart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findInCart = state.find((el) => el.id === action.payload.id);

      if (findInCart) {
        findInCart.qty += action.payload.qty;
        toast.success("Product quantity updated in cart", { id: "123" });
      } else {
        state.push({ ...action.payload });
        toast.success("Product added to cart", { id: "123" });
      }
      localStorage.setItem("vogueWearsCart", JSON.stringify(state));
    },
    // DECREASE IN CART
    changeInCart(state, action) {
      // for each element in the cart, if the element id matches the id we are sending from the payload , change the quantity to the quantity to the one coming  from the payload;
      state.forEach((el) => {
        if (el.id === action.payload.id) el.qty = Number(action.payload.qty);
      });
      toast.success("Item quantity has been updated", { id: "123" });
      localStorage.setItem("vogueWearsCart", JSON.stringify(state));
    },

    // REMOVE FROM CART
    removeFromCart(state, action) {
      const productIndex = state.findIndex((el) => el.id === action.payload.id);
      state.splice(productIndex, 1);
      toast.success("Product removed from cart", { id: "123" });
      localStorage.setItem("vogueWearsCart", JSON.stringify(state));
    },

    decreaseInCart(state, action) {
      state.forEach((el) => {
        if (el.qty === 1) {
          return;
        } else if (el.id === action.payload.id) el.qty = el.qty - 1;
        toast.success("Item quantity has been updated", { id: "123" });
        localStorage.setItem("vogueWearsCart", JSON.stringify(state));
      });
    },
    increaseInCart(state, action) {
      state.forEach((el) => {
        if (el.id === action.payload.id) el.qty = el.qty + 1;
        toast.success("Item quantity has been updated", { id: "123" });
        localStorage.setItem("vogueWearsCart", JSON.stringify(state));
      });
    },

    addGiftToCart: (state, action) => {
      toast.success("Gift wrapping added to cart", {
        id: "123",
      });
      state.push({ ...action.payload, qty: 1 });
      localStorage.setItem("vogueWearsCart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.length = 0;
      localStorage.setItem("mandyzCart", JSON.stringify(state)); // Update localStorage
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
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
