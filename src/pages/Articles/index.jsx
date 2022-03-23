import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import Img from "../../assets/Img/test.png";
import "./index.css";

export default function Articles() {
  return (
    <container>
      <div className="Container1">
        <div className="img1">
          <Col>
            <img src={Img} style={{ width: "180%" }} alt="imgtrotti"></img>
          </Col>
        </div>
        <div className="cardbodytitle1">
          <Col>
            <div className="cardbodytitle">
              <Card.Body>
                <h1 style={{ color: "#78a638" }}>Trottinette V.12</h1>
              </Card.Body>
            </div>
            <div className="cardbodydescription">
              <Card.Body>
                <h5>
                  La trottinette1 ou patinette2 est un engin de déplacement
                  personnel (EDP) composé d'une planche portée par deux ou trois
                  roues et d'un guidon. Il permet de se déplacer, un pied posé
                  sur la planche, l'autre étant utilisé pour se propulser par
                  poussée au sol. Servant de jouet d'enfant à partir des années
                  1930, elle est devenue un moyen de transport individuel urbain
                  depuis les années 2010 souvent équipée d'une motorisation
                  électrique.
                </h5>
              </Card.Body>
            </div>
          </Col>
        </div>
      </div>
      <div className="Container2">
        <Col>
          <div className="cardbodydescription2">
            <Card.Body>
              <h5>
                Depuis 2017, des trottinettes électriques en libre service ont
                fait leur apparition dans de nombreuses villes. À la différence
                des systèmes de vélos en libre service, ces trottinettes ne sont
                pas liées à une station de stockage et sont mises en place et
                récupérées quotidiennement par l'entreprise gérant la flotte
                pour procéder aux rechargement des batteries. L'absence de
                station de stockage cause de nombreux problèmes (encombrement
                des trottoirs, dégradations...) et les villes réfléchissent à un
                moyen de réglementer leur utilisation
              </h5>
            </Card.Body>
          </div>
        </Col>
        <div className="img2">
          <Col>
            <img src={Img} style={{ width: "50%" }} alt="Logo Trotti'NET"></img>
          </Col>
        </div>
      </div>
      <div className="resume">
        <Card.Body>
          <h5>
            La trottinette ou patinette est un engin de déplacement personnel
            (EDP) composé d'une planche portée par deux ou trois roues et d'un
            guidon. Il permet de se déplacer, un pied posé sur la planche,
            l'autre étant utilisé pour se propulser par poussée au sol.
          </h5>
        </Card.Body>
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
