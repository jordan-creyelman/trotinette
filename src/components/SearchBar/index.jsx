import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import "./index.css";

function SearchBar() {

  // const [datas, setDatas] = useState([]);

  // const fetchPost = async () => {
  //   const datas = await fetch("http://localhost:3000/posts", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
  //   const result = await datas.json();
  //   setDatas(result);
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  return (
    <>
        <div className="searchBar">
            <input type="text" name="searchBar" placeholder="Rechercher" />
        </div>
        <div className="search__results">
            
          <div className="search__result">Resultat</div>
         
            
        </div>
    </>
  )
}

export default SearchBar;