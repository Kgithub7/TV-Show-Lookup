import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import baseStyles from "./BaseSearchBar.module.css";
import styles from "./ShowsSearchBar.module.css";

function ShowsSearchBar() {
  return (
    <form className={`${baseStyles.searchInput} ${styles.searchInput}`} >
      <input
        className={`${baseStyles.searchInputBar} ${styles.searchInputBar}`}
        type="text"
        name="tv-show"
        placeholder="Enter TV Show Name"
      />
      <button type="submit" className={`${baseStyles.searchInputBtn} ${styles.searchInputBtn}`}>
        <FontAwesomeIcon
          icon="magnifying-glass"
          className={`${baseStyles.searchInputIcon} ${styles.searchInputIcon}`}
        />
      </button>
    </form>
  );
}

export default ShowsSearchBar;
