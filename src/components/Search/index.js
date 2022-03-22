import React,{useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Price from "./Price.js";
import "./index.css";
import Img from '../../assets/Img/test.png';


function SearchBar() {
   
  const [price, setPrice] = useState('');
  const [arrayPost, setArrayPost] = useState([]);
  const handleSearch =()=>{

    fetch('http://localhost:3000/scooters', {
     
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
              <input type="text" onChange={e => setPrice(e.target.value) } value={price} placeholder="Recherche par Prix"/><br />
              <button type="button" onClick={() => handleSearch() }>Enregistrer</button>
          </div>
          <div className="search__results">
              
            <div className="search__result">Résultats</div>
            <Row xs={1} md={4} className="g-4 row">
              {arrayPost.map(post=>
                <Col>
                  <div key={post.id}>
                    <Card key={post.id} className="card">
                    <Card.Body>
                      <Card.Img variant="top" src={Img} alt="" className="card_img" />
                      <Card.Text>{post.description.substring(0, 100)+"..."}</Card.Text>
                      <Card.Text>Prix :{post.price} €</Card.Text>
                      <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card>
                  </div>
                </Col>
              )}
            </Row>
          </div>
      </>  
    </div>
  ) 
}

export default SearchBar;        
            
   


