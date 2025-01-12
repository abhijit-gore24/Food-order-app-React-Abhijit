import React, { useState, useEffect } from "react";
import restaurantData from "../utils/data/restaurantData";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { Link, useHref } from "react-router-dom";
import useOnlineState from "../utils/data/useOnlineState";
import { withPromotedLabel } from "./RestaurantCard"
const Body = () => {
  // Initialize state with restaurant data
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // Filter function for top-rated restaurants
  const handleFilter = () => {
    const topRatedRestaurants = restaurantData.filter(
      (res) => res.rating > 4.5
    );
    setFilteredData(topRatedRestaurants);
    console.log("Top-rated Restaurants:", topRatedRestaurants);
  };

  // Reload the page to reset data
  const windowReload = () => {
    window.location.reload();
  };
  useEffect(() => {
    console.log("useEffect Called");
  }, []);
  console.log("Body Component Rendered");
  // Fetch data from Swiggy API when the component mounts

  const onlineStatus = useOnlineState(); // Check if the user is online
  if (onlineStatus === false) {
    return <h1 className="offline">Offline, Please check your internet connection</h1>;
  }
  const Help = () => {
    const redirectToChatGpt = () => {
      window.location.href = "https://chat.openai.com/chat";
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value, console.log(searchText))
          }
        />
        <button
          type="btn"
          className="search-text"
          onClick={() => {
            const filteredRestaurant = restaurantData.filter((res) =>
              res.resName.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filteredRestaurant);
            console.log("Search Results:", filteredRestaurant);
          }}
        >
          Search 🔍
        </button>

        <button className="button-17" onClick={handleFilter}>
          Top-rated Restaurant ✨❤️
        </button>
        <button className="button-17" onClick={windowReload}>
          Reload 🚀
        </button>
        <button className="button-17">
          <a href="https://chatgpt.com/?model=gpt-4o" className="help-link">Help</a>
        </button>
      </div>

      <div className="resto-container">
        {filteredData.map((restaurant, index) => (
          <div className="restaurant-card-container" key={restaurant.resId}>
            {restaurant.pramoted && <span className="ribbon-2">Pramoted</span>}
            <Link to={`/restaurant/${restaurant.resId}`}>
              <RestaurantCard
                pramoted={restaurant.pramoted}
                resName={restaurant.resName}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                imageUrl={restaurant.imageUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
