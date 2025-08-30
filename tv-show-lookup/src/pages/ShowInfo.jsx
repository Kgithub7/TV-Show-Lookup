import { Link, useParams } from "react-router";
import styles from "./ShowInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowsNav from "../components/ShowsNav";

function ShowInfo() {
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

  const { shows, show } = useParams();
  console.log(shows, show);
  return (
    <>
      <ShowsNav />
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
          <Link className={styles.backBtn} to={`/${shows}`}>
            <FontAwesomeIcon icon="arrow-left" /> Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowInfo;
