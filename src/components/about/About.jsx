import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsCode } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h1>Get to Know</h1>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Communication</h5>
              <small>with Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Daily practice</small>
            </article>
          </div>
          <p>
            Enthusiastic about coding. Daily, I try to be in sync with the latest tech-stack to improve both professionally and personally.
            Graduate student in the Department of Electrical and Computer Engineering (former Department of Computer Engineering) with
            fulfilled military obligations (2020).
          </p>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About