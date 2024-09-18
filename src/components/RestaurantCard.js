const RestaurantCard = ({ resData }) => {
  const { title, url, id, rate } = resData;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={url} alt="res-logo" />
      <h3>{title}</h3>
      <h4>{id}</h4>
      <h4>{rate} stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
