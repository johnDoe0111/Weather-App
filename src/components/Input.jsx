import "../styles/input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ search, setSearch, func }) => {
  return (
    <>
      <h1 className="input-title">Weather</h1>
      <div className="input-wrapper">
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") func();
          }}
          type="text"
          placeholder="Search for a city"
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon
          onClick={func}
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
