import React from "react";
import img from "../../assets/Img/logo trottinette.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userActions";
import Cookies from "js-cookie";

function TrotiBar(){
  const userToken = useSelector(state => state.token);
  const dispatch = useDispatch();
  let navbarItems;
  (userToken === null) ?
    navbarItems = <>      
      
        <Container>
          <Navbar.Brand href="/">
            <img
          src={img} alt="Logo Trotti'NET"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                <NavDropdown.Item href="/connexion">
                  Se Connecter
                </NavDropdown.Item>                
              </NavDropdown>
        </Container>
      
    </>
    : navbarItems = <>      
      
        <Container>
          <Navbar.Brand href="/">
            <img
          src={img} alt="Logo Trotti'NET"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <h1>Trotti'NET</h1>
        <Container>
              <NavDropdown align="start" title="Profil" id="dropdown-button-drop" menuVariant="dark" >                
                <NavDropdown.Item href="#action/3.3">Favoris</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => { dispatch(logOut()); Cookies.remove('token'); Cookies.remove('id'); Cookies.remove('isLoggedIn') }}>
                Se Déconnecter
                </NavDropdown.Item>
              </NavDropdown>
        </Container>
      
    </>
  return (
    <Navbar bg="light" expand="lg">             
      {navbarItems}
    </Navbar>
  );
};

export default TrotiBar;


