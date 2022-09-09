import React from 'react'
import './footer.css'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="!#">Home</a></li>
        <li><a href="!#about">About</a></li>
        <li><a href="!#experience">Experience</a></li>
        <li><a href="!#skills">Skills</a></li>
        <li><a href="!#portfolio">Portfolio</a></li>
        <li><a href="!#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} - Nick Koukis - Made with <span className='footer__copyright-heart'>&#10084;</span> and JavaScript</small>
      </div>
    </footer>
  )
}

export default Footer