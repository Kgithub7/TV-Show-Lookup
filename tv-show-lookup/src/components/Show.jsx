import styles from "./Show.module.css";

function Show() {
   const shows = result
      .map((showObject) => {
        if (
          showObject.show.name &&
          showObject.show.language &&
          showObject.show.genres[0] &&
          showObject.show.averageRuntime &&
          showObject.show.summary &&
          showObject.show.image.medium
        ) {
          return`
          <div class="${styles.showWrapper}">
            <div class="${styles.show}">
              <div class="${styles.showDescription}">
                <h2 class="${styles.showName}">${showObject.show.name}</h2>
                <div class="${styles.showDetails}">
                  <p>Language: <span class="${styles.showDescriptionText}">${
            showObject.show.language
          }</span></p>
                  <p>Genre(s): <span class="${
                    styles.showDescriptionText
                  }">${showObject.show.genres.join(", ")}</span></p>
                  <p>Duration: <span class="${styles.showDescriptionText}">${
            showObject.show.averageRuntime
          } minutes</span></p>
                  <p>Rating: <span class="${styles.showDescriptionText}">
                    ${
                      showObject.show.rating.average
                        ? `${showObject.show.rating.average}/10`
                        : `N/A`
                    }
                  </span></p>
                </div>
              </div>
              <div class="${styles.showImgWrapper}">
                <img src="${showObject.show.image.medium}" alt="${
            showObject.show.name
          }'s Poster Image" class="${styles.showImg}" />
                <a href="" class="${
                  styles.showImgLink
                }" onclick="toggleSummary(event)">View Summary</a>
              </div>
            </div>
            <div class="${styles.showSummaryModalWrapper}">
              <div class="${styles.showSummaryModal}">
                <p class="${styles.showSummary}">${extractSummary(
            showObject.show.summary
          )}</p>
                ${
                  showObject.show.officialSite
                    ? `<p class="${styles.showLink}">
                        Click <b><a href="${showObject.show.officialSite}" target="_blank">here</a></b> for more information.
                      </p>`
                    : `<p><i>*Link is currently unavailable.</i></p>`
                }
                <i class="${styles.faTimes}" onclick="toggleSummary(event)"></i>
              </div>
            </div>
          </div>`;
        }
      })
      .join("\n");
  return (
<></>
  );
}

export default Show;
