import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const userToken = useSelector(state => state.token);

  useEffect(
    () => {
      if (!userToken) { window.location = "/profile" }
      else
      {let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders          
      };

      fetch("https://apitrottinet.herokuapp.com/member-data", requestOptions)
      .then(response => response.json())
      .then(response=> setCurrentUser(response.user))
      .catch(error => console.log('error', error));}
    } 
    , [userToken]
  )
    
  return (
    <div className="container">
      <h3 className="title">
      Mon profil
      </h3>     
      <div className="mb-2 text-gray-700"> 
        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>       
        Mon pseudo : {currentUser.username}
      </div> 

       <div className="mb-2 text-gray-700 mt-10">
        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
        Mon e-mail : {currentUser.email}
      </div>     
      
    </div>
  )
};

export default Profile


