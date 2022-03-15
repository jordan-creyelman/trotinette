import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import Cookies from "js-cookie";
import "./index.css"

function SignOut() {
    let navigate = useNavigate();
  const {setUser} = useUserContext();

  
  const handleSubmit = () => {
    Cookies.remove("token");          
    setUser(null)
    navigate("/");
  };

  return (
    <div className='sign_out' >
        <button onClick={() => handleSubmit()} text={"Veux-tu vraiment te déconnecter ?"}>Déconnexion</button>
    </div>
  )
}

export default SignOut