import "../styles/App.css";
import Input from "./Input";
import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("Grozny");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${search}`;

  const addCities = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      setCities([...cities, data]);
      setSearch("");
      setError("");
    } else {
      setSearch("");
      setError(data.error.message);
    }
  };

  useEffect(() => {
    addCities();
  }, []);

  return (
    <div className="App">
      <div className="app-wrapper">
        <Input addCities={addCities} search={search} setSearch={setSearch} />
        <div className="error-block">{error}</div>
        <WeatherCard cities={cities} setCities={setCities} />
      </div>
    </div>
  );
}

export default App;
