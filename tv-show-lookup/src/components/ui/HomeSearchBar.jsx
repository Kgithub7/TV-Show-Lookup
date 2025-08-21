import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import baseStyles from "./BaseSearchBar.module.css";
import styles from "./HomeSearchBar.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

function HomeSearchBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  function onSearch(event) {
    if (inputValue) {
      event.preventDefault();
      const searchValue = inputValue;
      navigate("/shows", { state: searchValue });
    }
  }

  return (
    <form
      className={`${baseStyles.searchInput} ${styles.searchInput}`}
      role="search"
    >
      <input
        className={`${baseStyles.searchInputBar} ${styles.searchInputBar}`}
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") onSearch(event);
        }}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter TV Show Name"
      />
      <button
        type="submit"
        className={baseStyles.searchInputBtn}
        onClick={(event) => {
          event.preventDefault();
          if (inputValue) navigate("/shows", { state: inputValue });
        }}
      >
        <FontAwesomeIcon
          icon="magnifying-glass"
          className={`${baseStyles.searchInputIcon} ${styles.searchInputIcon}`}
        />
      </button>
    </form>
  );
}

export default HomeSearchBar;
