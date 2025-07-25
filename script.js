const input = document.querySelector(".header__input--bar");
let yIndex = 0;

async function search(event) {
  event.preventDefault();
  const showName = input.value;
  const searchResults = document.querySelector(".shows");
  searchResults.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
  searchResults.classList.add("loading");
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${showName}`
  );
  const result = await response.json();
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
        return `
        <div class="show--wrapper">
        <div class="show">
        <div class="show__description">
        <h2 class="show__name">${showObject.show.name}</h2>
        <div class="show__details">
        <p>Language: <span class="show__description--text">${
          showObject.show.language
        }</span></p>
  <p>Genre(s): <span class="show__description--text">${showObject.show.genres.join(
    ", "
  )}</span></p>
  <p>
  Duration:
  <span           class="show__description--text">${
    showObject.show.averageRuntime
  } minutes</span>
  </p>
  <p>
  Rating: <span class="show__description--text">
  ${
    showObject.show.rating.average
      ? `${showObject.show.rating.average}/10`
      : `N/A`
  }
  </span>
  </p>
  </div>
  </div>
  <div class="show__img--wrapper">
  <img
  src="${showObject.show.image.medium}"
  alt="${showObject.show.name}'s Poster Image"
  class="show__img"
  />
  <a href="" class="show__img--link" onclick="toggleSummary(event)">View Summary</a>
  </div>
  </div>
  <div class="show__summary-modal--wrapper">
  <div class="show__summary-modal">
  <p class="show__summary">${extractSummary(showObject.show.summary)}</p>
  ${
    showObject.show.officialSite
      ? `<p class="show__link">
    Click <b><a href="${showObject.show.officialSite}" target="_blank">here</a></b> for more information.
    </p>`
      : `<p><i>*Link is currently unavailable.</i></p>`
  }
  <i class="fa-solid fa-times" onclick="toggleSummary(event)"></i>
  </div>
  </div>
  </div>`;
      }
    })
    .join("\n");
  setTimeout(() => {
    searchResults.classList.remove("loading");
    searchResults.innerHTML = shows;
  }, 500);
}

function activateSearch() {
  input.focus();
}

function extractSummary(summaryFromAPI) {
  const summary = document.createElement("div");
  summary.innerHTML = summaryFromAPI;
  return summary.textContent.trim();
}

function toggleSummary(event) {
  event.preventDefault();
  const selectedShow = event.target.closest(".show--wrapper");
  if (!document.body.classList.contains("dim")) {
    yIndex = window.scrollY;
    document.body.style.top = `-${yIndex}px`;
    document.body.classList.add("dim");
  } else {
    document.body.classList.remove("dim");
    window.scrollTo(0, yIndex);
  }
  selectedShow.classList.toggle("view-summary");
}