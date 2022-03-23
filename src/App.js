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
import Footer from './components/Footer/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/index';


function App() {
  
  return (
    <div className="App">
      
      <Provider store={store}> 
        <Router>
          {/* <TrotiBar /> */}
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/inscription" element={<SignUp />} /> 
              <Route path="/connexion" element={<SignIn />} /> 
              <Route path="/deconnexion" element={<SignOut />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/Trott'eam" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
