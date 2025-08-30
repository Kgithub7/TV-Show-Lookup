import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import baseStyles from "./BaseSearchBar.module.css";
import styles from "./ShowsSearchBar.module.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function ShowsSearchBar() {
  const navigate = useNavigate();
  const params=useParams()
  const [inputValue, setInputValue] = useState("");

  function onSearch(event) {
    if (inputValue.trim()) {
      event.preventDefault();
      navigate(`/${inputValue}`);
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
        defaultValue={params.shows}
      />
      <button
        type="submit"
        className={`${baseStyles.searchInputBtn} ${styles.searchInputBtn}`}
        onClick={(event) => {
          event.preventDefault();
          if (inputValue) navigate(`/${inputValue}`);
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

export default ShowsSearchBar;
