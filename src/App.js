import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';
// import { UserContext } from './UserContext';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sign_up" element={<SignUp />} /> 
            <Route path="/sign_in" element={<SignIn />} /> 
            <Route path="/sign_out" element={<SignOut />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
