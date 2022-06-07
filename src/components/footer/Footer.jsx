import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import my_logo from "../../assets/my_logo.png"

const Footer = () => {
  return (
    <div className="footer__container">
    <footer>

      <a href="#" className='footer__logo'>
      <div className='my_logo_container'>
      <img src={my_logo} className="my__logo"/> 
      </div>
      <span className='AJ'>Aejhay™</span>
      </a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testmonials</a></li>
          <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.facebook.com/acoustic.AJ77/" target="_blank"><FaFacebookSquare /></a>
          <a href="https://www.instagram.com/aj_santos7/" target="_blank"><FaInstagramSquare /></a>
          <a href="https://twitter.com/Acoustic_AJ777" target="_blank"><FaTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aljon David Santos. All rights reserved.</small>
      </div>    

    </footer>
    </div>
  )
}

export default Footer