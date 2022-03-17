import React from "react";
import { useUserContext } from "../../UserContext";



const Profile = () => {
const { user } = useUserContext()

  return (
    user && (
      <div>
        <h1>Profil</h1>
        
        <p>{user.email}</p>
        
        
      </div>
    )
  );
};

export default Profile;
