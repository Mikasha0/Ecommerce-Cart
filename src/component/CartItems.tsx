import { useState } from "react";
import { ProductType } from "../types/product.types";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import NormalButton from "./NormalButton";
import { CarttItemsType } from "../types/cart-items.types";

export interface ProductTypeWithQuantity extends ProductType {
  quantity: number;
}
export default function CartItems({ product, handleRemove }: CarttItemsType) {
  const dispatch = useDispatch();
  const [productCounts, setProductCounts] = useState(product?.quantity);
  const toggleCount = (action: string) => {
    if (action === "increase") {
      dispatch(increaseQuantity(product?.id));
      setProductCounts((prev: number) => prev + 1);
    } else if (action === "decrease") {
      dispatch(decreaseQuantity(product?.id));
      setProductCounts((prev: number) => prev - 1);
    }
  };
  const discount = (product.discountPercentage / 100) * product.price; //converting the discount percentage to discount amount.
  const discountedPrice = Math.floor(product.price - discount); //used Math.floor for rounding up the discounted price.
  return (
    <>
      <div className="product-image">
        <img src={product?.images[0]} alt="product image" />
      </div>
      <h5>{product?.title}</h5>
      <h5 className="line-through">${product?.price}</h5>
      <h5>${discountedPrice * product.quantity}</h5>

      <div className="item-btn">
        <NormalButton
          btnName="+"
          cssClassName="btnQuantity"
          onClick={() => toggleCount("increase")}
        />
        <p className="product-count">{productCounts}</p>
        <NormalButton
          btnName="-"
          cssClassName="btnQuantity"
          onClick={() => toggleCount("decrease")}
        />
        <button
          className="btn-delete"
          onClick={() => handleRemove(product?.id)}
        >
          <MdDeleteForever size="18" />
        </button>
      </div>
    </>
  );
}
