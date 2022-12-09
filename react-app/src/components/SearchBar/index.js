import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const stations = useSelector((state) => state.stations);
  const stationsArr = Object.values(stations);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");

  const clickSearchResult = (station) => {
    setQuery(station.name);
    setShowResults(false);
  };

  const search = (e) => {
    const searchQuery = e.target.value;
    setShowResults(true);
    setQuery(searchQuery);
    const searchResult = stationsArr.filter((station) =>
      station.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(searchResult);
  };
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search Radio Stations"
          value={query}
          onChange={(e) => search(e)}
          onBlur={() => {
            setTimeout(() => {
              setShowResults(false);
            }, 100);
          }}
        ></input>
        {showResults && (
          <div className="search-results-container">
            {results.length > 0 ? (
              results.map((result) => (
                <NavLink to={`/station/${result.id}`}>
                  <div
                    className="search-result"
                    onClick={() => clickSearchResult(result)}
                  >
                    {result.name}
                  </div>
                </NavLink>
              ))
            ) : (
              <div className="search-result search-result-fail">
                Can't Find That Station, Suggest It Here!
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
