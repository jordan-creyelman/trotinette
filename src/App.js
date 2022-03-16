import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn/index';
import SignOut from './pages/SignOut/index';
import SignUp from './pages/SignUp/index';
import Contact from './pages/Contact';
import About from './pages/About';
import Articles from './pages/Articles';
import Profile from './pages/Profile';
import { UserContext } from './UserContext';
import Footer from './components/Footer/index';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';



function App() {
  const [user, setUser] = useState(null);
  const userToken = Cookies.get("token");

  useEffect(() => {
     
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:3000/member-data`, {
        method: "GET",
        headers: {
          Authorization: `${userToken}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setUser(result.user);
    };
    
    const checkCookies = () => {
      if (typeof userToken === "string") {
        setUser(jwt_decode(userToken));
      }
    };

    checkCookies();
    fetchUser();
  }, [userToken]);

  return (
    <div className="App">
      
      <UserContext.Provider value={{ user, setUser }}> 
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/inscription" element={<SignUp />} /> 
              <Route path="/connexion" element={<SignIn />} /> 
              <Route path="/deconnexion" element={<SignOut />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a_propos" element={<About />} />
            </Routes>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
