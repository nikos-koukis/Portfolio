import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials