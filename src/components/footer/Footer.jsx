import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Nick Koukis</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank' rel="noopener noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nick Koukis - Made with love and JavaScript</small>
      </div>
    </footer>
  )
}

export default Footer