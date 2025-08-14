import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar({ inputRef }) {
  return (
    <form className="header__input" role="search">
      <input
        ref={inputRef}
        className="header__input--bar"
        type="text"
        name="tv-show"
        placeholder="Enter TV Show Name"
      />
      <button
        onClick="search(event)"
        type="submit"
        className="header__input--btn"
      >
        <FontAwesomeIcon
          icon="magnifying-glass"
          className="header__input--icon"
        />
      </button>
    </form>
  );
}

export default SearchBar;
