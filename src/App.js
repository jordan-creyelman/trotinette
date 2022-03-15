import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home/index';
import SignIn from './Pages/SignIn/index';
import SignOut from './Pages/SignOut/index';
import SignUp from './Pages/SignUp/index';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Articles from './Pages/Articles';
import Profile from './Pages/Profile';
// import { UserContext } from './UserContext';
// import SearchBar from './components/SearchBar';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      
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
      
    </div>
  );
}

export default App;
