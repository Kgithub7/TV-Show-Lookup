import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HomeSearchBar.module.css";

function SearchBar({ inputRef }) {
  return (
    <form className={styles.headerInput} role="search" onSubmit="">
      <input
        ref={inputRef}
        className={styles.headerInputBar}
        type="text"
        name="tv-show"
        placeholder="Enter TV Show Name"
      />
      <button type="submit" className={styles.headerInputBtn}>
        <FontAwesomeIcon
          icon="magnifying-glass"
          className={styles.headerInputIcon}
        />
      </button>
    </form>
  );
}

export default SearchBar;
