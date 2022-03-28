import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import Price from "./Price.js";
import "./index.css";
import {Link} from 'react-router-dom';

function SearchBar() {
  const [price, setPrice] = useState("");
  const [arrayPost, setArrayPost] = useState([]);

  const handleSearch = () => {
    fetch("https://apitrottinet.herokuapp.com/scooters", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
        setArrayPost(Price(post, price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const enterKey = (d) => {
    if (d.keyCode === 13) {
      handleSearch()
    }
  }

  return (
    <div>
      <>
        <div className="search ">
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="Recherche par prix"
            onKeyDown={(enterKey)}
          />
          <br />
          <button type="button" onClick={() => handleSearch()}>
            <MdSearch className="search-icons" size="1.3em" />
          </button>
        </div>
        <div className="search__results">
          <Row xs={1} md={4} className="row">
            { arrayPost.map((post) => ( 
              <Col>
                <div key={post.id}>
                  <Card key={post.id} className="card">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={post.image}
                        alt=""
                        className="card_img"
                      />
                      <Card.Text className="descriptionhome">
                        {post.description.substring(0, 100) + "..."}
                      </Card.Text>
                      <Card.Text className="pricehome">Prix : {post.price} €</Card.Text>
                      <Button className="btnsearch"><Link className="linkdetail" to={`/articles/${post.id}`}>Details</Link></Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </> 
    </div>
  );
}

export default SearchBar;
