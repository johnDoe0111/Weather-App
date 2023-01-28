import "../styles/input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ search, setSearch, addCities }) => {
  return (
    <>
      <h1 className="input-title">Weather</h1>
      <div className="input-wrapper">
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") addCities();
          }}
          type="text"
          placeholder="Search for a city"
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon
          onClick={addCities}
          className="input-icon"
          icon={faMagnifyingGlass}
          style={{ color: "white" }}
          size="4x"
        />
      </div>
    </>
  );
};

export default Input;
