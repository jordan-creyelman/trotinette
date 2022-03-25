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
    <div className="container">
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
                <h4 >{article.brand}</h4> <br/>
                
              </Card>
            </div>
            <div className="cardbodydescription">
              <Card.Body>
                <h5>{article.weight}</h5>weight <br/>
                <h5>{article.battery_autonomy}</h5> battery_autonomy <br/>
                <h5>{article.max_speed}</h5> max_speed <br/>
                <h5>
                 {article.description}
                </h5>
                <h2>{article.price}</h2>
              </Card.Body>
              <a href={article.scooter_url} target="_blank" rel='noopener
                    noreferrer' className='hover'> site marchand </a>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}
