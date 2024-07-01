import React from "react";
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider.jsx";
import "./SearchResults.css";
import SearchComponent from "./SearchComponent.jsx";

function SearchResults() {
  const location = useLocation();
  const { results } = location.state;
  const [{ inventory }] = useStateValue();

  return (
    <div className="searchBoxRender">
      <div className="searchResults">
        <h2>Search Results</h2>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="search__results">
            {results.map((index) => (
              <SearchComponent product={inventory[index]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
