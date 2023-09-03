import { ProductType } from "../types/product.types";
import NormalButton from "./NormalButton";

export interface ProductListTypes {
  product: ProductType;
  addProduct: (product: ProductType) => void;
}
export default function ProductList({ product, addProduct }: ProductListTypes) {
  const discount = (product.discountPercentage / 100) * product.price; //converting the discount percentage to discount amount.
  const discountedPrice = Math.floor(product.price - discount); //used Math.floor for rounding up the discounted price.
  return (
    <>
      <a href="#">
        <div className="product-image">
          <img src={product.images[0]} alt="product image" />
        </div>
      </a>
      <div className="product-details">
        <a href="#" className="product-title">
          {product.title}
        </a>
        <p style={{fontSize:'14px'}}>{product.description}</p>
        <div className="add-to-cart">
          <div className="price-view">
            <span className="product-price line-through" style={{marginBottom:'4px'}}>${product.price}</span>
            <span className="discounted-price">${discountedPrice}</span>
          </div>

          <NormalButton
            btnName="Add to Cart"
            cssClassName="add-to-cart-button"
            onClick={() => addProduct(product)}
          />
        </div>
      </div>
    </>
  );
}
