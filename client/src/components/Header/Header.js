import { Link } from "react-router-dom";
import "./Header.css";

import logo from "./images/BasketLogo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/matches">Create match</Link>
          </li>
          <li>
            <Link to="/pointsTable">Add points</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
