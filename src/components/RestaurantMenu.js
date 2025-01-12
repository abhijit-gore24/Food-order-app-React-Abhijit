import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Shimmer from "./Shimmer";
import restaurantData from "../utils/data/restaurantData";
import "./RestaurantMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // State for storing restaurant data
  const { resId } = useParams(); // Extract resId from route params
  const dispatch = useDispatch(); // Redux dispatch function

  useEffect(() => {
    fetchMenu(); // Fetch menu data when resId changes
  }, [resId]);

  const fetchMenu = async () => {
    try {
      // Find the restaurant data that matches the resId
      const restaurant = restaurantData.find(
        (res) => res.resId === parseInt(resId)
      );

      if (restaurant) {
        console.log("Restaurant data fetched:", restaurant);
        setResInfo(restaurant); // Set the specific restaurant's data
      } else {
        console.error("Restaurant not found for resId:", resId);
        setResInfo(null);
      }
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  const handleAddToCart = (item) => {
    // Dispatch action to add the item to the cart
    dispatch(addItem(item));
    console.log(`${item.name} added to cart`);
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <img
        src={resInfo.imageUrl || ""}
        alt={resInfo.resName || "Restaurant"}
        style={{ width: "120px", height: "120px" }}
      />
      <h1>{resInfo.resName || "Unknown Restaurant"}</h1>
      <h2>{resInfo.cuisine || "Cuisine not available"}</h2>
      <h4>{resInfo.price || "₹400 for two"}</h4>
      <h4>Rating: {resInfo.rating || "N/A"}</h4>
      <h4>Delivery Time: {resInfo.deliveryTime || "N/A"} mins</h4>
      <div className="menu-items">
        <h3>Menu:</h3>
        {resInfo.menu && resInfo.menu.length > 0 ? (
          resInfo.menu.map((category, index) => (
            <div key={index} className="menu-category">
              <h4>{category.category || "Unnamed Category"}</h4>
              <ul>
                {category.items && category.items.length > 0 ? (
                  category.items.map((item, idx) => (
                    <li className="listItem" key={idx}>
                      {item.name || "Unnamed Item"} - ₹{item.price || "N/A"}
                      <button
                        className="addToCart"
                        onClick={() => handleAddToCart(item)}
                        style={{ marginLeft: "10px" }}
                      >
                        Add to Cart
                         <span></span> <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    </li>
                  ))
                ) : (
                  <p>No items available</p>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No menu available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
