import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/product.types";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";

export default function Product() {
  const dispatch = useDispatch();

  const { isLoading, data } = useQuery({
    queryKey: ["ProductDetailsData"],
    queryFn: async () =>
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => data.products),
  });

  if (isLoading) return "Loading...";

  const addProduct = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productsWrapper">
      {data.map((product: ProductType) => (
        <div className="product-card" key={product.id}>
          <ProductList product={product} addProduct={addProduct} />
        </div>
      ))}
    </div>
  );
}
