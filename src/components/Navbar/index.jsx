import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import './index.css';
import img3 from "../../assets/Img/logo trottinette.png";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { logOut } from '../../redux/userActions';

const Navbar = () => {

  const userToken = useSelector(state => state.token);
  const dispatch = useDispatch();
  
  function animation(){    
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  useEffect(() => {
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 5);
    });
  }, []);

  let navbarItems;
  (userToken === null)?
    navbarItems = <>
        <NavLink className="navbar-brand navbar-logo " to="/" >
            <img src={img3} alt="Logo Trotti'NET" className='img-fluid'></img> 
        </NavLink>  
         <h2>Trotti'NET</h2>     
        <button 
          className="navbar-toggler"
          onClick={ function(){
            setTimeout(function(){ animation(); });
          }}
          type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
           <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div> 
            <li className="nav-item" >
              <NavLink className="nav-link" to="/" >
                <i className="fas fa-home"></i>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/inscription" >
                <i className="fas fa-user-plus"></i>    
                Inscription
              </NavLink> 
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/connexion" >
                <i className="fas fa-sign-in-alt"></i>   
                Connexion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" >
                <i  className="far fa-address-book"></i>
                Contact 
              </NavLink>
            </li>
          </ul>
        </div>
    </>
    : navbarItems = <>
        <NavLink className="navbar-brand navbar-logo " to="/" >
            <img src={img3} alt="Logo Trotti'NET" className='img-fluid'></img> 
        </NavLink>  
         <h2>Trotti'NET</h2>     
        <button 
          className="navbar-toggler"
          onClick={ function(){
            setTimeout(function(){ animation(); });
          }}
          type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
           <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div> 
            <li className="nav-item active" >
              <NavLink className="nav-link" to="/" >
                <i className="fas fa-home"></i>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => { dispatch(logOut()); Cookies.remove('token'); Cookies.remove('id'); Cookies.remove('isLoggedIn') }} >
                <i className="fas fa-sign-out-alt"></i>   
                Déconnexion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile" >
                <i  className="fas fa-user"> </i>
                Profil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" >
                <i  className="far fa-address-book"></i>
                Contact 
              </NavLink>
            </li>
          </ul>
        </div>
    </>

  return (      
    
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      {navbarItems}        
    </nav>
  );
}

export default Navbar;