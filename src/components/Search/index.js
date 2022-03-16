
import React,{useState} from 'react'

import Price from "./Price.js"


function SearchBar() {
   
  const [price, setPrice] = useState('');
  const [arrayPost, setArrayPost] = useState([]);
 const handleSearch =()=>{

 
  
  
    fetch('https://api-trottinet.herokuapp.com/scooters', {
     
      method: 'get',
      headers: {
        
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
        setArrayPost(Price(post,price))
      })
      .catch(error => {
        console.log(error);
      })
      // setArrayPost(Price(arrayPost,price))
      // // console.log(arrayPost)
      // console.log(arrayPost[0].price)

 }

  

  return (
    <div>
     <>
        <div className="searchBar">
            <input type="text" name="searchBar" placeholder="Rechercher" />
            <input type="text" onChange={e => setPrice(e.target.value) } value={price} placeholder="Price"/><br />
            <button type="button" onClick={() => handleSearch() }>Register</button>
        </div>
        <div className="search__results">
            
          <div className="search__result">Resultat</div>
          {arrayPost.map(post=><div key={post.id}>{post.description.substring(0, 100)+"..."}{post.price}</div>)
            }
        </div>
    </>
      
     
  </div>
) 
}

export default SearchBar;