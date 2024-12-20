const RestaurantCard = ({
  resName,
  cuisine,
  rating,
  deliveryTime,
  imageUrl,
}) => {
  return (
    <div className="res-card">
      <img className="res-img" src={imageUrl}></img>
      <h3 className="res-name">{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="details">
        <div className="rating">{rating}</div>
        <div className="delivery-time">{deliveryTime}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;