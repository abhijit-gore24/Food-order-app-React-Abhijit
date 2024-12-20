import { LOGO_URL } from "../utils/data/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
// let btnName = "login";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/main">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <Link to="/data">
            <li>Data Page</li>
          </Link>
          <button
            type="button"
            class="button button3"
            onClick={() => {
              btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
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
