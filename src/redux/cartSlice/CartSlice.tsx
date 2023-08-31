import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("cartItems")) || [],
  error: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      localStorage.setItem("cartItems", JSON.stringify([...state.cartData, action.payload]));
      state.cartData.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
