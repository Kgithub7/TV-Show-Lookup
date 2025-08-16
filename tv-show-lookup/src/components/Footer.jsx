import FooterLogo from "../assets/logo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerRow}>
      <div className={`row ${styles.footerDescription}`}>
        <div className={styles.footerLogo}>
          <img src={FooterLogo} className={styles.footerLogoImg} />
        </div>
        <p className={styles.footerCopyright}>&copy; ShowScout 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
