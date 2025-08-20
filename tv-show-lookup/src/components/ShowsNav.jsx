import styles from "./ShowsNav.module.css";
import baseStyles from "./BaseNav.module.css";
import NavLogo from "../assets/logo.png";
import { Link } from "react-router";
import ShowsSearchBar from "./ui/ShowsSearchBar";

function ShowsNav() {
  return (
    <div className={`${baseStyles.navRow} ${styles.navRow}`}>
      <nav className="row">
        <div
          className={`${baseStyles.navLogoWrapper} ${styles.navLogoWrapper}`}
        >
          <img
            className={`${baseStyles.navLogoImg} ${styles.navLogoImg}`}
            src={NavLogo}
          />
        </div>
        <ShowsSearchBar />
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default ShowsNav;
