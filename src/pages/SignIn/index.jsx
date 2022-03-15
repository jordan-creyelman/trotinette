import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import Cookies from 'js-cookie';
import "./index.css"

function SignIn() {
    const { setUser } = useUserContext();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
  
    let navigate = useNavigate();
  
    const handleSubmit = () => {
      const data = {
        user: {
          email: email,
          password: password,
        },
      };
  
      fetch("http://localhost:3000/users/sign_in", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          const token = res.headers.get("Authorization");
          Cookies.set("token", token, { expires: 7 });
          setUser(Cookies.get("token"));
          navigate(`/`);
          return res.json();
        } else {
          throw new Error(res);
        }
      });
    };

  return (
    <div className="sign_in" >
        <form>
            <h1>Connexion</h1>
            <label htmlFor="email">Identifiant </label>
            <input id="email" type="text" onChange={handleEmail} />

            <label htmlFor="password">Mot de passe </label>
            <input id="password" type="text" onChange={handlePassword} />

            <button onClick={() => handleSubmit()} type={"button"} text={"Connexion"}>Valider</button>
        </form>
    </div>
  )
}

export default SignIn