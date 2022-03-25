import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn/index';
import SignOut from './pages/SignOut/index';
import SignUp from './pages/SignUp/index';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

function App() {
  
  return (
    <div className="page-container">
      <div className='content-wrap'>
      <Provider store={store}> 
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/inscription" element={<SignUp />} /> 
              <Route path="/connexion" element={<SignIn />} /> 
              <Route path="/deconnexion" element={<SignOut />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/articles/:id" element={<Articles />} />
              <Route path="/Trott'eam" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>  
        </Router>
      </Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
