import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioIMG.png'
import hootIMG from '../../assets/hootIMG.png'
import IMG2 from '../../assets/portfolioIMG.png'
import IMG3 from '../../assets/portfolio3.jpg'
import eforoImg from '../../assets/eforo.jpg'
import petgrooming from '../../assets/petgrooming3.jpg'

const data = [
  {
    id: 1,
    image: hootIMG,
    title: 'Hoot Network - Social Media App - WEB3',
    github: '#',
    demo: 'https://www.hoot.network/',
    online: true,
    githubOnline: false
  },
  {
    id: 2,
    image: IMG1,
    title: 'My Portfolio Site',
    github: 'https://github.com/nikos-koukis/Portfolio',
    demo: 'https://nickoukis.netlify.app/',
    online: true,
    githubOnline: true
  },
  {
    id: 3,
    image: petgrooming,
    title: 'Pet Grooming Services',
    github: 'https://github.com/nikos-koukis/Pet-Grooming-Service',
    demo: 'https://www.google.com/',
    online: false,
    githubOnline: true
  },
  {
    id: 4,
    image: IMG3,
    title: 'Mobile App - Coffee Nest',
    github: 'https://github.com/nikos-koukis/Coffee-Nest-Android-Studio',
    demo: 'https://www.google.com/',
    online: false,
    githubOnline: true
  },
  {
    id: 5,
    image: eforoImg,
    title: 'Landing Page - WordPress',
    github: '#',
    demo: 'https://eforooil.com/',
    online: true,
    githubOnline: false
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, online, githubOnline }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {githubOnline ? <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a> : ``}
                  {online ? <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a> : ``}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio