import React from "react"
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logIn } from "../../redux/userActions";
import { useNavigate } from "react-router-dom";


function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitInfo = (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "user": {
        "email": `${event.target.elements.email.value}`,
        "password": `${event.target.elements.password.value}`
      }
    });
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch("http://localhost:3000/users/sign_in", requestOptions)
      .then(response => {
        if (response.headers.get('Authorization'))
        {
          Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
          Cookies.set('isLoggedIn', true, { sameSite: 'lax' });
          dispatch(logIn(Cookies.get('token')));
          navigate('/')
        }
        else (alert('Something went wrong'))
      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <div>
        <h1>Se connecter</h1>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitInfo}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail"></input>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
            </div>
            <button type="submit">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
