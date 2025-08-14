import { Link } from "react-router";
import NavLogo from "../assets/logo.png";

function Nav({ activateSearch }) {



  return (
    <div className="row nav__row">
      <nav>
        <div className="nav__logo--wrapper">
          <img className="nav__logo--img" src={NavLogo} />
        </div>
        <div className="nav__links">
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/"className="nav__link"  onClick={activateSearch}>
            Search
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
