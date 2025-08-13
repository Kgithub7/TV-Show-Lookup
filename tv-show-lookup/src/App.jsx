import { BrowserRouter as Router,Routes,Route } from "react-router";
import Home from "./pages/Home";
import Shows from "./pages/Shows";

function App() {
return (
  <>
    <section id="landing-page">
      <div class="row nav__row">
        <nav>
          <div class="nav__logo--wrapper">
            <img class="nav__logo--img" src="assets/TV Lookup Logo.png" />
          </div>

          <div class="nav__links">
            <a href="index.html" class="nav__link">
              Home
            </a>
            <a href="#" class="nav__link" onclick="activateSearch()">
              Search
            </a>
          </div>
        </nav>
      </div>
      <header>
        <div class="row">
          <div class="header__description">
            <h1 class="header__title">Find All Your Favorite Shows</h1>
            <form class="header__input" role="search">
              <input
                class="header__input--bar"
                type="text"
                name="tv-show"
                placeholder="Enter TV Show Name"
              />
              <button
                onclick="search(event)"
                type="submit"
                class="header__input--btn"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
    </section>
    <section id="shows-section">
      <div class="container">
        <div class="row">
          <div class="shows"></div>
        </div>
      </div>
    </section>
  </>
);
}

export default App
