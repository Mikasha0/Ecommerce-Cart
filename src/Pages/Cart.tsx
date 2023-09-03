import { useDispatch, useSelector } from "react-redux";
import CartItems from "../component/CartItems";
import { CartType } from "../component/Navbar";
import { removeFromCart } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: CartType) => state.cart);

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart" style={{display:'flex'}}>
      <div className="cartWrapper">
        {products?.map((product) => (
            <div key={product?.id} className="cartCard">
              <CartItems product={product} handleRemove={handleRemove} />
            </div>
        ))}
      </div>
      <div className="cartDetails">subtotal</div>
    </div>
  );
}
