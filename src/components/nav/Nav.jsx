import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdSettingsSuggest } from 'react-icons/md'
import { IoIosGitNetwork } from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="!#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="!#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="!#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoIosGitNetwork /></a>
      <a href="!#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdSettingsSuggest /></a>
      <a href="!#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject /></a>
      <a href="!#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav