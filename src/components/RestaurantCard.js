import { URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
