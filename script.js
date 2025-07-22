const input = document.querySelector(".header__input--bar");

async function search(event) {
  const showName = input.value;
  event.preventDefault();
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${showName}`
  );
  const result = await response.json();
  const shows = result
    .map((show) => {
      `<div class="show">
<div class="show__description">
  <h2 class="show__name">${show.name}</h2>
  <p>Language: <span class="show__description--text">${show.language}</span></p>
  <p>Genre(s): <span class="show__description--text">${show.genres.join(
    ","
  )}</span></p>
  <p>
    Average Episode Length:
    <span class="show__description--text">${show.averageRuntime}</span>
  </p>
  <p>
    Average Rating:
    <span class="show__description--text">${show.rating.average}</span>
  </p>
  <p>
    Summary:<br /><span class="show__description--text">${extractSummary(
      show.summary
    )}</span>
  </p>
  <p>Link: <a href="#" class="show__description--text">${
    show.officialSite
  }</a></p>
</div>
<div class="show__img--wrapper">
  <img
    src="${show.image.medium}"
    alt="${show.name}'s poster image"
    class="show__img"
  />
</div>
</div>`;
    })
    .join("\n");

  console.log(shows[0]);
}

function activateSearch() {
  input.focus();
}

function extractSummary(summaryFromAPI) {
  const summary = document.createElement("div");
  summary.innerHTML = summaryFromAPI;
  return summary.textContent.trim();
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
