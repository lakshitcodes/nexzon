import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider.jsx";
import { auth } from "./firebase.js";
import logoWhite from "./assets/nexzon_home.png";

function Header() {
  const [{ basket, user, inventory }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function getIndexesByKeyword(searchValue) {
    const indexes = [];
    const searchWords = searchValue.toLowerCase().split(" ");

    inventory.forEach((item, index) => {
      const keywords = item.keywords.map((keyword) => keyword.toLowerCase());
      const matches = searchWords.some((word) =>
        keywords.some((keyword) => keyword.includes(word))
      );

      if (matches) {
        indexes.push(index);
      }
    });

    return indexes;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const indexes = getIndexesByKeyword(search);
    indexes.forEach((item) => {
      console.log(inventory[item].title);
    });
    navigate("/search-results", { state: { results: indexes } });
  };

  return (
    <div className="header">
      <Link to="/home">
        <img className="header__logo" src={logoWhite} alt="nexzon" />
      </Link>
      <form onSubmit={handleSearch} className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Nexzon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </form>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div
            className="header__option header__signInOption"
            onClick={handleAuthentication}
          >
            <span className="header__optionLineOne">
              Hello {user ? user.email.split("@")[0] : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="https://www.primevideo.com/">
          <div className="header__option yourPrime">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
