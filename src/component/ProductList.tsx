import { ProductType } from "../types/product.types";

export interface ProductListTypes{
    product:ProductType,
    addProduct:(product:ProductType)=>void
}
export default function ProductList({product, addProduct}:ProductListTypes) {
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
        <p className="">{product.description}</p>
        <div className="add-to-cart">
          <span className="product-price">${product.price}</span>
          <button
            className="add-to-cart-button"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
