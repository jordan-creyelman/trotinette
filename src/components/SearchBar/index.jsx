import React from 'react';
import "./index.css";

function SearchBar() {
  return (
    <>
        <div className="searchBar">
            <input type="text" name="searchBar" placeholder="Rechercher" />
        </div>
        <div className="search__results">
            <div className="search__result">Resultat :</div>
        </div>
    </>
  )
}

export default SearchBar;