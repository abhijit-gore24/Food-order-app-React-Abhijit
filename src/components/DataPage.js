import React, { useEffect, useState } from "react";
import "./DataPage.css";
import Shimmer from "./Shimmer";
const DataPage = () => {
  const [swiggyData, setSwiggyData] = useState([]); // State to store API data

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const fetchSwiggyData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (response.ok) {
        const updatedSwiggyData = await response.json();
        console.log(updatedSwiggyData); // Log the full response to inspect its structure

        // Extracting the specific data you need (cards) from the API
        const restaurants =
          updatedSwiggyData?.data?.cards[0]?.card?.card?.gridElements
            ?.infoWithStyle?.info || [];
        setSwiggyData(restaurants);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } 
  };

  return (
    <div className="data-page">
      <h1>Restaurants</h1>
      <div className="cards-container">
        {swiggyData.length > 0 ? (
          swiggyData.map((restaurant, index) => (
            <div className="card" key={index}>
              {/* Dynamically load the image */}
              {restaurant?.action?.imageId && (
                <img
                  src={`https://res.cloudinary.com/swiggy/image/upload/${restaurant?.action?.imageId}`}
                  alt={restaurant?.action?.text || "Restaurant Image"}
                  className="card-image"
                />
              )}

              {/* Dynamically load the title */}
              {restaurant?.action?.text && <h3>{restaurant?.action?.text}</h3>}

              {/* Dynamically load description */}
              {restaurant?.description && <p>{restaurant?.description}</p>}

              {/* Any additional data to display */}
              {restaurant?.accessibility?.altText && (
                <p>Cousine: {restaurant?.accessibility?.altText}</p>
              )}

              {/* Link (If present) */}
              {restaurant?.action?.link && (
                <button
                  className="button-42"
                  href={restaurant?.action?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Collection
                </button>
              )}
            </div>
          ))
        ) : (
          <p>
            {/*  <Loader
              type="spinner-circle"
              bgColor="#FF0000"
              color="#FF0000"
              title={"Loading Please wait..."}
              size={100}
            /> */}
            <Shimmer />
          </p>
        )}
      </div>
    </div>
  );
};

export default DataPage;
