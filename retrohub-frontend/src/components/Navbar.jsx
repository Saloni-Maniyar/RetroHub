import logoRetro from '../assets/logoNew.png';
import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return(
    <div className="Navbar">
      <img src={logoRetro} alt="RetroHub"></img>
      <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact-us'>Contact us</a></li>
          <li><a href='/Signup'><button>Get Started</button></a></li>
      </ul>
    </div>
  );
    
}