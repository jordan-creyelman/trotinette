import React from 'react';
import './index.css';

const Logout = () => {
    const deco=()=>{

  fetch("http://localhost:3000/logout", {
  method: "delete",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((json) => Promise.reject(json));
    }
  })
  .then((json) => {
    console.dir(json);
  })
  .catch((err) => console.error(err));
}
    return (

        <button type="button" class="btn btn-outline-light" onClick={() => deco() } >Logout</button>
    );
};

export default Logout;