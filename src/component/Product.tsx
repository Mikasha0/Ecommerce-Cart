import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/product.types";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import ErrorComponent from "./ErrorComponent";
import { APIError } from "../types/api-error.types";

export default function Product() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useQuery({
    queryKey: ["ProductDetailsData"],
    queryFn: async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);

        if (response.status === 404) {
          const customError: APIError = new Error(
            "Failed to fetch data from the API"
          );
          throw customError;
        }
        return response.json().then((data) => data.products);
      } catch (error) {
        const customError: APIError = new Error(
          "Error fetching data from the API"
        );
        throw customError;
      }
    },
  });

  if (isLoading) return "Loading...";
  if (error) {
    const customError: APIError = error as APIError;
    return <ErrorComponent errorMessage={customError.message} />;
  }

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
