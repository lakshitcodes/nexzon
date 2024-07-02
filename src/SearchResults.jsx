import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider.jsx";
import "./SearchResults.css";
import SearchComponent from "./SearchComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";

function SearchResults() {
  const location = useLocation();
  const { results } = location.state;
  const [{ inventory }] = useStateValue();
  const [searchFound, setSearchFound] = useState(false);

  useEffect(() => {
    if (results.length > 0) {
      setSearchFound(true);
    } else {
      setSearchFound(false); // Handle the case when results are empty
    }
  }, [results]);

  return (
    <div className="searchresults__outerbox">
      <div className="searchBoxRender">
        <div className="searchResults">
          <h2>Search Results</h2>
          {results.length === 0 ? (
            <>
              <p>
                Oops! Looks like our shelves are empty on that one. Try another
                search?
              </p>
            </>
          ) : (
            <div className="search__results">
              {results.map((index) => (
                <SearchComponent product={inventory[index]} />
              ))}
            </div>
          )}
        </div>
      </div>
      {searchFound ? "" : <ErrorComponent />}
    </div>
  );
}

export default SearchResults;
