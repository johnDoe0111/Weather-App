import "../styles/weather-card.css";

const WeatherCard = ({ cities }) => {
  return (
    <div className="card-block">
      {cities.map((item) => (
        <div className={`card ${item.current.is_day ? `day` : `night`}`}>
          <div className="card-left-items">
            <p className="city-name">{item.location.name}</p>
            <p className="city-location">{item.location.region}</p>
            <p className="date">{item.location.localtime}</p>
          </div>
          <div className="card-right-items">
            <img
              src={item.current.condition.icon}
              alt=""
              className="right-items-img"
            />
            <p className="temp_c">{item.current.temp_c}ºC</p>
            <p className="temp_f">{item.current.temp_f}ºF</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
