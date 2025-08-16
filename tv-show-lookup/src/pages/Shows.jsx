import ShowsNav from "../components/ShowsNav";
import styles from "./Shows.module.css";

function Shows() {
  return (
    <>
      <ShowsNav />
      <section id={styles.showsSection}>
        <div className="container">
          <div className="row">
            <div className={styles.shows}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shows;
