import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Show.module.css";

function Show({ show }) {
  let yIndex = 0;
  function extractSummary(summaryFromAPI) {
    const summary = document.createElement("div");
    summary.innerHTML = summaryFromAPI;
    return summary.textContent.trim();
  }

  function toggleSummary(event) {
    event.preventDefault();
    const selectedShow = event.target.closest(`.${styles.showWrapper}`);
    if (!document.body.classList.contains(styles.dim)) {
      yIndex = window.scrollY;
      document.body.style.top = `-${yIndex}px`;
      document.body.classList.add(styles.dim);
    } else {
      document.body.classList.remove(styles.dim);
      window.scrollTo(0, yIndex);
    }
    selectedShow.classList.toggle(styles.viewSummary);
  }

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
            <span
              className={styles.showImgLink}
              onClick={(event) => toggleSummary(event)}
            >
              View Summary
            </span>
          </div>
        </div>
        <div className={styles.showSummaryModalWrapper}>
          <div className={styles.showSummaryModal}>
            <p className={styles.showSummary}>{extractSummary(show.summary)}</p>

            {show.officialSite ? (
              <p className={styles.showLink}>
                Click{" "}
                <b>
                  <a href={show.officialSite} target="_blank">
                    here
                  </a>
                </b>{" "}
                for more information.
              </p>
            ) : (
              <p>
                <i>*Link is currently unavailable.</i>
              </p>
            )}
            <FontAwesomeIcon
              icon="xmark"
              className={styles.faXmark}
              onClick={(event) => toggleSummary(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
