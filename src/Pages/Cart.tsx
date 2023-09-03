import { useDispatch, useSelector } from "react-redux";
import CartItems from "../component/CartItems";
import { CartType } from "../component/Navbar";
import { removeFromCart } from "../store/cartSlice";
import CartDetails from "../component/CartDetails";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: CartType) => state.cart);

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = products
  .map((product) => {
    const discount = (product.discountPercentage / 100) * product.price;
    const discountedPrice = Math.floor(product.price - discount) * product.quantity;
    const fullAmount = product.price * product.quantity;
    const totalDiscount = fullAmount - discountedPrice;

    return { discountedPrice, fullAmount, totalDiscount };
  })
  .reduce(
    (acc, product) => {
      return {
        discountedPrice: acc.discountedPrice + product.discountedPrice,
        fullAmount: acc.fullAmount + product.fullAmount,
        totalDiscount: acc.totalDiscount + product.totalDiscount, 
      };
    },
    { discountedPrice: 0, fullAmount: 0, totalDiscount: 0 }
  );

<div className="cartDetails">
  <h4>Summary</h4>
  <h5>Full Amount: {totalPrice.fullAmount}</h5>
  <h5>Subtotal: {totalPrice.discountedPrice}</h5>
  <h5>Total Discount: {totalPrice.totalDiscount}</h5> 
</div>


  return (
    <div className="cart" style={{ display: "flex" }}>
      <div className="cartWrapper">
        {products?.map((product) => (
          <div key={product?.id} className="cartCard">
            <CartItems product={product} handleRemove={handleRemove} />
          </div>
        ))}
      </div>
      <CartDetails cartDetails={totalPrice}/>
    </div>
  );
}
