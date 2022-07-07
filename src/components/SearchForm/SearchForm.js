import React from "react";
import "./SearchForm.scss";

export default function SearchForm({ handleSearch }) {
  const [userInput, setUserInput] = React.useState();
  return (
    <div className="searchForm">
      <div className="container">
        <input
          id="searchInput"
          type="text"
          label="serach-book-field"
          aria-label="serach-book-field"
          aria-required="true"
          required
          name="search-input"
          className="searchInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button
          role="button"
          label="search button"
          disabled={!userInput}
          onClick={() => handleSearch(userInput)}
          className="searchButton"
        >
          Search
        </button>
      </div>
    </div>
  );
}
