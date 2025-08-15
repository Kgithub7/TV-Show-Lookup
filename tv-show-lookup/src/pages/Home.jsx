import SearchBar from "../components/ui/HomeSearchBar";
import HomeImg from "../assets/home-image.svg"
import styles from "./Home.module.css"

function Home({inputRef}) {
    
  return (
    <>
      <section id="landingPage">
        <header>
          <div className="row">
            <div className={styles.headerDescription}>
              <h1 className={styles.headerTitle}>
                Find All Your Favorite Shows
              </h1>
              <SearchBar inputRef={inputRef} />
              <div className={styles.headerImgWrapper}>
                <img src={HomeImg} className={styles.headerImg} alt="" />
              </div>
            </div>
          </div>
        </header>
      </section>


    </>
  );
}

export default Home;
