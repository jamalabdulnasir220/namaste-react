import { useContext } from "react";
import { URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  
  

  const {loggedInUser} = useContext(UserContext)

  const styleCard = {
    // backgroundColor: "#f0f0f0",
  };

  return (
    <div
      data-testid="rescard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400"
      style={styleCard}
    >
      <img
        className="rounded-lg"
        src={URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User: {loggedInUser}</h4>

    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
