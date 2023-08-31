import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice/CartSlice";

export interface ProductType {
  products: Product[];
  total:    number;
  skip:     number;
  limit:    number;
}

export interface product {
  products: Product[]
}

export interface Product {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}
export default function Product() {
  const { isLoading, data } = useQuery({
    queryKey: ["ProductDetailsData"],
    queryFn: async () =>
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => data.products),
  });

  const cartData = useSelector((state) => state?.cart);
  const dispatch = useDispatch()

  console.log(cartData)

  if (isLoading) return "Loading...";
  return (
    <div className="productsWrapper">
      {data.map((product: products) => (
        <div className="product-card" key={product.id}>
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
              <button className="add-to-cart-button" onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
