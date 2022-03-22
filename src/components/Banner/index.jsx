import React from 'react';
import "./index.css";
import img2 from "../../assets/Img/bird_banner.png"

export default function Banner() {
  return (
    <div>
     <img style={{height: 'auto', maxwidth: '400px', width: '100%', borderRadius: 0, marginTop: '1px' }}src={img2} alt="Banner"></img> 
    </div>
  )
}
