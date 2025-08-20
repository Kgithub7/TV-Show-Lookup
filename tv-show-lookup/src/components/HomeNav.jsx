import { Link } from "react-router";
import NavLogo from "../assets/logo.png";
import baseStyles from "./BaseNav.module.css";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <div className={`row ${baseStyles.navRow} ${styles.navRow}`}>
      <nav>
        <div
          className={`${baseStyles.navLogoWrapper} ${styles.navLogoWrapper}`}
        >
          <img className={styles.navLogoImg} src={NavLogo} />
        </div>
        {/* <div className={baseStyles.navLinks}>
          <Link to="/shows" className={baseStyles.navLink}>
            Home
          </Link>
          <Link to="/" className={styles.navLink} onClick={activateSearch}>
            Search
          </Link>
        </div> */}
      </nav>
    </div>
  );
}

export default HomeNav;
