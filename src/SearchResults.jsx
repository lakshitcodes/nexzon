import React from "react";
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider.jsx";

function SearchResults() {
  const location = useLocation();
  const { results } = location.state;
  const [{ inventory }] = useStateValue();

  return (
    <div>
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ol>
          {results.map((index) => (
            <li key={inventory[index].id}>{inventory[index].title}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default SearchResults;
