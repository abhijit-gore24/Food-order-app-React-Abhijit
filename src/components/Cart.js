import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css"; // Add this line to include the CSS file
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem())
    }
  return (
    <div className="cart-container">
      <div className="cart-card">
        <h1>Cart</h1>
        <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length > 0 ? (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <div className="item-name">{item.name}</div>
                <div className="item-price">₹{item.price}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
