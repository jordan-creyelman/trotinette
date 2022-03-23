import React from 'react'
import { Container } from '@material-ui/core';
import "./index.css";
import img3 from '../../assets/Img/contact.png';

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='titlecontact'>Trott'eam</h1>

      <Container className='linkgithub'>
        <div className='link'>
        <a className='contactlink' href="https://github.com/jordan-creyelman">Jordan Creyelman</a>
        <a className='contactlink' href="https://github.com/HaryRabarijoely">Hary Andrianarisoa</a>
        <a className='contactlink' href="https://github.com/kalu6334">Lucas Martin</a>
        <a className='contactlink' href="https://github.com/Nicoclos">Nicolas Bia</a>
        <a className='contactlink' href="https://github.com/JulienRouet">Julien ROUET</a>
        </div>
        <img style={{height: 400, width: 800, borderRadius: 0,}}src={img3} alt="Banner" className='img-contact'></img>
      </Container>
    </div>
    
  )
}
