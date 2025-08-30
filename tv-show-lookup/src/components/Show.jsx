import styles from "./Show.module.css";
import { Link, useParams } from "react-router";

function Show({ show }) {
  const { shows } = useParams();

  if (
    show.name &&
    show.language &&
    show.genres[0] &&
    show.averageRuntime &&
    show.summary &&
    show.image &&
    show.image.medium
  ) {
    let showImage = show.image.medium;
    return (
      <div className={styles.showWrapper}>
        <div className={styles.show}>
          <div className={styles.showDescription}>
            <h2 className={styles.showName}>{show.name}</h2>
            <div className={styles.showDetails}>
              <p>
                Language:{" "}
                <span className={styles.showDescriptionText}>
                  {show.language}
                </span>
              </p>
              <p>
                Genre(s):{" "}
                <span className={styles.showDescriptionText}>
                  {show.genres.join(", ")}
                </span>
              </p>
              <p>
                Duration:{" "}
                <span className={styles.showDescriptionText}>
                  {show.averageRuntime} minutes
                </span>
              </p>
              <p>
                Rating:{" "}
                <span className={styles.showDescriptionText}>
                  {show.rating.average ? `${show.rating.average}/10` : "N/A"}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.showImgWrapper}>
            <img
              src={showImage}
              alt={`${show.name}'s Poster Image`}
              className={styles.showImg}
            />
            <Link
              className={styles.showImgLink}
              to={`/${shows}/${show.name.replaceAll(" ", "-")}`}
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
