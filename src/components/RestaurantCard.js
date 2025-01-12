import React from "react";

const RestaurantCard = ({
  resName,
  cuisine,
  rating,
  deliveryTime,
  imageUrl,
}) => {
  return (
    <div className="res-card">
      <img className="res-img" src={imageUrl} alt={resName} />
      <h3 className="res-name">{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="details">
        <div className="rating">{rating}</div>
        <div className="delivery-time">{deliveryTime} mins</div>
      </div>
    </div>
  );
};

// Higher-Order Component to add "Promoted" label
export const withPromotedLabel = (Component) => {
  return (props) => {
    return (
      <div className="res-card promoted-wrapper">
        <div className="promoted">Promoted</div>
        <Component {...props} /> {/* Forward props to the wrapped component */}
      </div>
    );
  };
};

export default RestaurantCard;
