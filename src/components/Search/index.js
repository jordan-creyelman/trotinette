import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import Price from "./Price.js";
import "./index.css";

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
    // setArrayPost(Price(arrayPost,price))
    // // console.log(arrayPost)
    // console.log(arrayPost[0].price)
  };
  
  const enterKey = (d) => {
    if (d.keyCode == 13) {
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
            placeholder="Recherche par Prix"
            onKeyDown={(enterKey)}
          />
          <br />
          <button type="button" onClick={() => handleSearch()}>
            <MdSearch className="search-icons" size="1.3em" />
          </button>
        </div>

        <div className="search__results">
          <div className="search__result"></div>
          <Row xs={1} md={4} className="g-4 row">
            {arrayPost.map((post) => (
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
                      <Card.Text>
                        {post.description.substring(0, 100) + "..."}
                      </Card.Text>
                      <Card.Text>Prix :{post.price} €</Card.Text>
                      <Button variant="primary">Details</Button>
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
