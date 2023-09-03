import { ProductTypeWithQuantity } from "./produt-type-quantity.types";

export interface CarttItemsType {
    product: ProductTypeWithQuantity;
    handleRemove: (productId: number) => void;
  }