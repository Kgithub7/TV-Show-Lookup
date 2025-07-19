const input = document.querySelector(".header__input--bar");

async function search(event) {
  const showName = input.value;
  event.preventDefault();
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${showName}`
  );
  const result = await response.json();
  console.log(result);
}

function activateSearch() {
  input.focus();
}
