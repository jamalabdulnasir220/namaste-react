import RestaurantCard from "./RestaurantCard";
import resDataa from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(resDataa);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredData = resData.filter(
              (restaurant) => restaurant.rate > 4
            );
            setResData(filteredData);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
