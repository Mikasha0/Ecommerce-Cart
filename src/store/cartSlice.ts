import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/product.types";

export type CartItems = ProductTypeWithQuantity[];
export interface ProductTypeWithQuantity extends ProductType {
  quantity: number;
}

const localStorageCartItems = localStorage.getItem("CartItems");
const initialState: CartItems = localStorageCartItems
  ? JSON.parse(localStorageCartItems)
  : [];

const removeCart = (state: CartItems, id: number) => {
  const removeCart = state.filter((item) => item.id !== id);
  localStorage.setItem("CartItems", JSON.stringify(removeCart));

  return removeCart;
};

const increaseCartQuantity = (state: CartItems, id: number) => {
  const editedData = state.map((item: any) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  localStorage.setItem("CartItems", JSON.stringify(editedData));
  return editedData;
};

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
      } else {
        return increaseCartQuantity(state, action.payload.id);
      }
    },
    removeFromCart: (state: CartItems, action: PayloadAction<number>) => {
      return removeCart(state, action.payload);
    },
    increaseQuantity: (state: CartItems, action: PayloadAction<number>) => {
      const editedData = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("CartItems", JSON.stringify(editedData));
      return editedData;
    },
    decreaseQuantity: (state: CartItems, action: PayloadAction<number>) => {
      const editedData = state.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) {
            return null;
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      const filteredData = editedData.filter((item) => item !== null);
      localStorage.setItem("CartItems", JSON.stringify(filteredData));
      return filteredData as CartItems;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
