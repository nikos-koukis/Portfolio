import React from 'react'
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials