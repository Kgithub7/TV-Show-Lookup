const input = document.querySelector(".header__input--bar");

async function search(event) {
  const showName = input.value;
  event.preventDefault();
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${showName}`
  );
  const result = await response.json();
  const searchResults = document.querySelector(".shows");
  const shows = result
    .map((showObject) => {
      if (
        showObject.show.name &&
        showObject.show.language &&
        showObject.show.summary &&
        showObject.show.genres[0] &&
        showObject.show.averageRuntime &&
        showObject.show.rating.average
      ) {
        return `<div class="show">
<div class="show__description">
  <h2 class="show__name">${showObject.show.name}</h2>
  <p>Language: <span class="show__description--text">${
    showObject.show.language
  }</span></p>
    ${
      showObject.show.genres[0]
        ? `<p>Genre(s): <span class="show__description--text">${showObject.show.genres.join(
            ", "
          )}</span></p>`
        : ``
    }
    ${
      showObject.show.averageRuntime
        ? `<p>
    Average Episode Length:
    <span           class="show__description--text">${showObject.show.averageRuntime} minutes</span>
</p>`
        : ``
    }
  ${
    showObject.show.rating.average
      ? `<p>
  Rating: <span class="show__description--text">${showObject.show.rating.average}/10</span>`
      : ``
  }
  </p>
  </div>
<div class="show__img--wrapper">
  <img
    src="${showObject.show.image.medium}"
    alt="${showObject.show.name}'s Poster Image"
    class="show__img"
  />
  <a href="#" class="show__img--link">View Summary</a>
</div>
</div>`;
      }
    })
    .join("\n");
  console.log(shows);
  searchResults.innerHTML = shows;
}

function activateSearch() {
  input.focus();
}

function extractSummary(summaryFromAPI) {
  const summary = document.createElement("div");
  summary.innerHTML = summaryFromAPI;
  // return summary.textContent.trim();
}

// show:
// name: "Regular Show"
// language: "English"
// averageRuntime: 15
// genres: (2) ['Comedy', 'Adventure']
// ended: "2017-01-16"
// network: {id: 11, name: 'Cartoon Network', country: {…}, officialSite: null}
// officialSite: "http://www.cartoonnetwork.com/tv_shows/regular-show/video"
// premiered: "2010-09-06"
// rating: {average: 7.6}
// runtime: 15
// summary: "<p>The<b> Regular Show</b> is about Mordecai and Rigby who are two best friends who take the problems and mundane tasks of their boring job to fantastical places.</p>"
// type: "Animation"
// image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/6/15947.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/6/15947.jpg'}


  // <p>
  //   Summary:
  //   <br />
  //   <span class="show__description--text">
  //     ${extractSummary(showObject.show.summary)}
  //   </span>
  // </p>;

  //   ${
  //   showObject.show.officialSite
  //     ? `<p class="show__description--text">Click <b><a href="${showObject.show.officialSite}" target="_blank">here</a></b> for more info.</p>`
  //     : ``
  // }