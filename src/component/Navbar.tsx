import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import {BsCart3} from 'react-icons/bs'
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartData = useSelector((state) => state?.cart);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FaHamburger />
      </label>
      <span className="logo">ECOMMERCE STORE</span>
      <ul>
        <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navLink">
            Cart
          </Link>
        </li>
        <span className="cartCount"><BsCart3/>: {cartData.cartData.length}</span>
      </ul>
    </nav>
  );
}
