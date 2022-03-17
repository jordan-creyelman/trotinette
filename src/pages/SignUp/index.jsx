import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import "./index.css"

const SignUp = () => {

    let navigate = useNavigate();
  
    const { setUser } = useUserContext();
  
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
        
    
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
  
    
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
  
    const fetchRegisterForm = (data) => {
      
      fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
          const token = res.headers.get("Authorization");
          Cookies.set("token", token, { expires: 7 });
          navigate(`/`);      
          return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
  
    };
  
      
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
        setError(true);
      } else {
        const data = {
          user: {
            email: email,
            password: password,
          },
        }
        setSubmitted(true);
        setError(false);
        fetchRegisterForm(data);
        setUser(jwt_decode(Cookies.get("token")))
      }
    };
  
    
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? "" : "none",
          }}
        >
          <h1>Bienvenue !</h1>
        </div>
      );
    };
  
    
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? "" : "none",
          }}
        >
          <h1>Veuillez renseigner tous les champs</h1>
        </div>
      );
    };
  
    return (
      <div className="sign_up">
        <form mode="vertical" onSubmit={handleSubmit}>
          <h1>Inscription</h1>
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
            
          <label>Email</label>
  
          <input onChange={handleEmail} className="input" value={email} type="email" />
  
          <label>Password</label>
  
          <input onChange={handlePassword} className="input" value={password} type="text" />
  
          <button type={"submit"} text={"Inscription"}>Valider</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;