import React from "react";
import { useParams } from "react-router-dom";
import  { useState }  from 'react';
import { Card, Col  } from "react-bootstrap";
import "./index.css";

export default function Articles() {
  const {id} = useParams();
  const [article, setArticle] = useState([]);

  fetch(`https://apitrottinet.herokuapp.com/scooters/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    setArticle(res);
  })
  .catch((error) => {
    console.log(error);
  });
    
   return (
    <container>
      <div className="Container1">
        <div className="img1">
          <Col>
            <img src={article.image} style={{  size: "286x180" }} alt="imgtrotti"></img>
          </Col>
        </div>
        <div className="cardbodytitle1">
          <Col>
            <div className="cardbodytitle">
              <Card.Title>
                <h1 style={{ color: "#78a638"}} >{article.name}</h1>
              </Card.Title>
              <Card>
                <h3 >{article.brand}</h3>
              </Card>
            </div>
            <div className="cardbodydescription">
              <Card.Body>
                <h5>
                 {article.description}
                </h5>
              </Card.Body>
            </div>
          </Col>
        </div>
      </div>
    </container>

      // <Container>
      //   <Row>
      //     <Col>1 of 2</Col>
      //     <h1>francis</h1>
      //     <Col>2 of 2</Col>
      //   </Row>
      // </Container>
  );
}
