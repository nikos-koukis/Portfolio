import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

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
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mauris a velit rhoncus tincidunt sit amet ac mi.
            Etiam at urna non est pharetra aliquet. Ut pharetra lectus velit, a efficitur nisl auctor elementum.
            Proin scelerisque ornare aliquet. Maecenas ut nisi eu nibh elementum hendrerit. Mauris nec enim sed augue facilisis maximus ut vitae nulla.
            Pellentesque eu rutrum felis, quis efficitur odio. Nunc pharetra euismod consectetur.
          </p>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About