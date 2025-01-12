import { LOGO_URL } from "../utils/data/constants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineState from "../utils/data/useOnlineState";
import UserContext from "../utils/UserContext";
import "./Header.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// let btnName = "login";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineState();
  const { loggedInUser } = useContext(UserContext);
  console.log({ loggedInUser });
  const cartItems = useSelector((store) => store.cart.items);
  // Selector hook we use to read the value of a state variable
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <Link className="help-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="help-link" to="/about">
            <li>About</li>
          </Link>
          <Link className="help-link" to="/contact">
            <li>Contact</li>
          </Link>

          <Link className="help-link" to="/data">
            <li>Data Page</li>
          </Link>
          <Link className="help-link" to="/cart">
            <li className="cart">
              {cartItems.length} <FontAwesomeIcon icon={faShoppingCart} />
            </li>
          </Link>

          <li className="loggedInUser">{loggedInUser}</li>
          <button
            type="button"
            class="button button3"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(setBtnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
