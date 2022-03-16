import React from 'react'
import CardArticle from '../../components/CardArticle';
import Search from '../../components/Search'

// import { useEffect } from 'react';
// import { useState } from 'react';
// import SearchBar from '../../components/SearchBar'
// import { useUserContext } from '../../UserContext';
import "./index.css"

function Home() {
  // const { user } = useUserContext();

  // const [data, setData] = useState([]);

  // const fetchPost = async () => {
  //   const data = await fetch("http://localhost:3000/scooters", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
  //   const result = await data.json();
  //   setData(result);
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  return (

    <>
        <div className='home' >
            <Search />            
        </div>
        <div >            
            <CardArticle />
        </div>
    </>
  );

}

export default Home