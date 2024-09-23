import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resData, setResData] = useState([]);

  const onlineStatus = useOnlineStatus();

  //when we are implementing our search functionality, we don't want to filter the main resData, so we create a copy and apply the filter there.
  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(
    //   json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(onlineStatus === false) return <h1>Looks like you're offline, please check your internet connection!!!</h1>

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filter = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(filter);
            }}
          >
            Search button
          </button>
        </div>
        <button
          onClick={() => {
            const filteredData = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredData(filteredData);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredData?.map((restaurant) => (
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            key={restaurant.info.id}
            to={`/restaurants/${restaurant?.info?.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
