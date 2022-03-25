import React from 'react'
import Banner from '../../components/Banner';
import Search from '../../components/Search';
import imghome from '../../assets/Img/contact.png';
import './index.css';

function Home() {

  return (
    
    <div>
      <Banner />
      <div>
        <Search />
      </div>
      <div className='boxhome pt={{ xs: 5, sm: 10 }}'>
        <img className='imghome'  style={{ height: "80%", minWidth: "30%", minHeight: "30%",  width: "80%", borderRadius: 0}}src={imghome} alt="Banner" ></img>
        <p className='description'>Vous recherchez un nouveau moyen de transport éco-responsable, pratique, confortable, non encombrant, et qui va faire de chacun de vos trajets un moment de plaisir ? Alors visitez notre catalogue de trottinettes qui répondra à toutes vos attentes. </p>
      </div>
      
    </div>
 
  );

}

export default Home