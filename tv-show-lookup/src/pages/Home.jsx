import SearchBar from "../components/ui/SearchBar";
import HomeImg from "../assets/home-image.svg"

function Home({inputRef}) {
    
  return (
    <>
      <section id="landing-page">
        <header>
          <div className="row">
            <div className="header__description">
              <h1 className="header__title">Find All Your Favorite Shows</h1>
              <SearchBar inputRef={inputRef} />
              <div className="header__img--wrapper">
                <img src={HomeImg} className="header__img" alt="" />
              </div>
            </div>
          </div>
        </header>
      </section>
      <section id="shows-section">
        <div className="container">
          <div className="row">
            <div className="shows"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
