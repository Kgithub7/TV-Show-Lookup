import { Link } from "react-router";
import NavLogo from "../assets/logo.png";
import styles from "./Nav.module.css";

function Nav({ activateSearch }) {
  return (
    <div className={`row ${styles.navRow}`}>
      <nav>
        <div className={styles.navLogoWrapper}>
          <img className={styles.navLogoImg} src={NavLogo} />
        </div>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/" className={styles.navLink} onClick={activateSearch}>
            Search
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
