import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">Acueil</Link> 
        <Link to="/sign_up">Inscription</Link> 
        <Link to="/sign_in">Connexion</Link> 
        <Link to="/sign_out">Deconnexion</Link>
    </div>
  )
}

export default Navbar