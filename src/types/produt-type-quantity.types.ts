import { ProductType } from "./product.types";

export interface ProductTypeWithQuantity extends ProductType {
    quantity: number;
}