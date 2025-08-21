import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import ShowsNav from "../components/ShowsNav";
import styles from "./Shows.module.css";
import axios from "axios";
import notFoundImage from "../assets/not-found.svg";
import Show from "../components/Show";

function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  async function search() {
    const showName = location.state;
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${showName}`
    );
    console.log(data.map((obj) => obj.show));
    console.log(showName);
    const extractShows = data.map((obj) => obj.show);
    setShows(extractShows);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    search();
    console.log(shows);
    console.log(loading);
    console.log(location.state);
  }, [location.state]);
  // const showName = input.value;
  // const searchResults = document.querySelector(`.${styles.shows}`);
  // searchResults.innerHTML = `<FontAwesomeIcon icon="faSpinner" />`;
  // searchResults.classList.add(styles.loading);

  // const response = await fetch(
  // `https://api.tvmaze.com/search/shows?q=${showName}`
  // );
  // const result = await response.json();

  // const shows = result
  //   .map((showObject) => {
  //     if (
  //       showObject.show.name &&
  //       showObject.show.language &&
  //       showObject.show.genres[0] &&
  //       showObject.show.averageRuntime &&
  //       showObject.show.summary &&
  //       showObject.show.image.medium
  //     ) {
  //       return `
  //       <div class="${styles.showWrapper}">
  //         <div class="${styles.show}">
  //           <div class="${styles.showDescription}">
  //             <h2 class="${styles.showName}">${showObject.show.name}</h2>
  //             <div class="${styles.showDetails}">
  //               <p>Language: <span class="${styles.showDescriptionText}">${
  //         showObject.show.language
  //       }</span></p>
  //               <p>Genre(s): <span class="${
  //                 styles.showDescriptionText
  //               }">${showObject.show.genres.join(", ")}</span></p>
  //               <p>Duration: <span class="${styles.showDescriptionText}">${
  //         showObject.show.averageRuntime
  //       } minutes</span></p>
  //               <p>Rating: <span class="${styles.showDescriptionText}">
  //                 ${
  //                   showObject.show.rating.average
  //                     ? `${showObject.show.rating.average}/10`
  //                     : `N/A`
  //                 }
  //               </span></p>
  //             </div>
  //           </div>
  //           <div class="${styles.showImgWrapper}">
  //             <img src="${showObject.show.image.medium}" alt="${
  //         showObject.show.name
  //       }'s Poster Image" class="${styles.showImg}" />
  //             <a href="" class="${
  //               styles.showImgLink
  //             }" onclick="toggleSummary(event)">View Summary</a>
  //           </div>
  //         </div>
  //         <div class="${styles.showSummaryModalWrapper}">
  //           <div class="${styles.showSummaryModal}">
  //             <p class="${styles.showSummary}">${extractSummary(
  //         showObject.show.summary
  //       )}</p>
  //             ${
  //               showObject.show.officialSite
  //                 ? `<p class="${styles.showLink}">
  //                     Click <b><a href="${showObject.show.officialSite}" target="_blank">here</a></b> for more information.
  //                   </p>`
  //                 : `<p><i>*Link is currently unavailable.</i></p>`
  //             }
  //             <i class="${styles.faTimes}" onclick="toggleSummary(event)"></i>
  //           </div>
  //         </div>
  //       </div>`;
  //     }
  //   })
  //   .join("\n");

  // setTimeout(() => {
  //   searchResults.classList.remove(styles.loading);
  //   searchResults.innerHTML = shows;
  // }, 500);

  return (
    <>
      <ShowsNav />
      <section id={styles.showsSection}>
        <div className="container">
          <div className="row">
            {loading ? (
              <div className={styles.loadingStage}>
                <FontAwesomeIcon
                  icon="compact-disc"
                  className={styles.loadingStageIcon}
                />
              </div>
            ) : (
              <div className={styles.shows}>
                {shows.length > 0 ? (
                  shows.map((showObject, index) => 
                    <Show show={showObject} key={index} />
                  )
                ) : (
                  <div className={styles.notFound}>
                    <img src={notFoundImage} className={styles.notFoundImg} />
                    <h3>
                      Your search produced no results.
                      <br /> Please try again.
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shows;
