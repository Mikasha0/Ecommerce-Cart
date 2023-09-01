import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/product.types";

export type CartItems = ProductType[];

const localStorageCartItems = localStorage.getItem("CartItems");
const initialState: CartItems = localStorageCartItems
  ? JSON.parse(localStorageCartItems)
  : [];
// export interface CartItemsType {
//   cart:ProductType[],
//   totalQuantity:number,
//   totalPrice:number
// }
// const initialState:CartItmsType = {
//   cart: localStorageCartItems ? JSON.parse(localStorageCartItems) : [],
//   totalQuantity: 0,
//   totalPrice: 0,
// } ;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartItems, action: PayloadAction<ProductType>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        localStorage.setItem(
          "CartItems",
          JSON.stringify([...state, { ...action.payload, quantity: 1 }])
        );
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state: CartItems, action: PayloadAction<number>) => {
      const removeCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("CartItems", JSON.stringify(removeCart));
      return removeCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
