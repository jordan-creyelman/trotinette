import React from "react";
import img from "../../assets/Img/logo trottinette.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const navbar = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
        src={img} alt="Logo Trotti'NET"></img></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/inscription">Inscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <h1>Trotti'NET</h1>
      <Container>
            <NavDropdown align="start" title="Profil" id="dropdown-button-drop" menuVariant="dark" >
              <NavDropdown.Item href="/inscription">Inscription</NavDropdown.Item>
              <NavDropdown.Item href="/connexion">
                Se Connecter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Favoris</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/deconnexion">
                Se Déconnecter
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>

  );
};

export default navbar;
