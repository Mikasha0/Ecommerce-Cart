import { useState } from "react";
import { ProductType } from "../types/product.types";

export interface CarttItemsType {
  product: ProductType;
  handleRemove: (productId: number) => void;
}
export default function CartItems({ product, handleRemove }: CarttItemsType) {
  const [productCounts, setProductCounts] = useState(1);
  const toggleCount = (action: string) => {
    if (action === "increase") {
      setProductCounts((prev) => prev + 1);
    } else if (action === "decrease") {
      setProductCounts((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="product-image">
        <img src={product.images[0]} alt="product image" />
      </div>
      <h5>{product.title}</h5>
      <h5>{product.price}</h5>
      <button onClick={() => toggleCount("increase")}>Increase</button>
      <p>{productCounts}</p>
      <button onClick={() => toggleCount("decrease")}>Decrease</button>
      <button className="btn" onClick={() => handleRemove(product.id)}>
        Remove
      </button>
    </>
  );
}
