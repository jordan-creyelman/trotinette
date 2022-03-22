import React from 'react';
import "./index.css";
import img2 from "../../assets/Img/bird_banner.png"

export default function Banner() {
  return (
    <div className='banner'>
    
      <div className='bannerimg'>
          <img style={{height: 400, width: 1920, borderRadius: 0,}}src={img2} alt="Banner" className='img-fluid'></img>
        </div>
        <h3>La trottinette1 ou patinette2 est un engin de déplacement personnel (EDP) composé d'une planche portée par deux ou trois roues et d'un guidon. Il permet de se déplacer, un pied posé sur la planche, l'autre étant utilisé pour se propulser par poussée au sol. Servant de jouet d'enfant à partir des années 1930, elle est devenue un moyen de transport individuel urbain depuis les années 2010 souvent équipée d'une motorisation électrique.</h3>
    
  </div>
  )
}
