import { BsCart3 } from 'react-icons/bs';
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ProductType } from '../types/product.types';

export interface CartType {
  cart:  ProductType[];
}

export default function Navbar() {

  const items = useSelector((state:CartType)=> state.cart);

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
        <span className="cartCount"><BsCart3/>: {items.length}</span>
      </ul>
    </nav>
  );
}
