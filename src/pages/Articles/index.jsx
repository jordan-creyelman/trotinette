import React from "react";
import { useParams } from "react-router-dom";
import  { useEffect, useState }  from 'react';
import { Card, Col  } from "react-bootstrap";
import "./index.css";

export default function Articles() {
  const {id} = useParams();
  const [article, setArticle] = useState([]);
  useEffect(()=>{
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
    })
  },[id]);

   return (
    <div className="Container">
        <div className="img1">
          <Col>
            <img className="imgarticle" src={article.image} alt="imgtrotti"></img>
          </Col>
        </div>
        <div className="cardbody">
          <Col>
            <div className="cardbodytitle">
              <Card.Title>
                <h1 style={{ color: "#78a638"}} >{article.name}</h1>
              </Card.Title>
              <Card className="cardbrand">
                <h4 className="article.brand" >Marque : {article.brand}</h4>
              </Card>
            </div>
            <div className="cardbodydescription">
              <Card.Body>
                <h6 className="descriptionpost">Description : {article.description}</h6>
                <h6 className="Smax">Vitesse Max : {article.max_speed} Km/h</h6> 
                <h6 className="battery">Battery Autonomie : {article.battery_autonomy} Heures</h6> 
                <h6 className="weight">Poids : {article.weight} Kilo</h6> 
                <h6 className="Price">Prix : {article.price} €</h6>
              </Card.Body>
              <a href={article.scooter_url} target="_blank" rel='noopener
                    noreferrer' className="click"> Si vous la désirez = Cliquez ICI</a>
            </div>
          </Col>
        </div>
    </div>
  );
}
