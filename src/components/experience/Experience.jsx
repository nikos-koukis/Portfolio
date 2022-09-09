import React from 'react'
import './experience.css'
import Typewriter from 'typewriter-effect';

const jobs = [
  {
    id: 3,
    title: 'Software Engineer',
    company: 'tgndata',
    description: 'May 2022 - Present',
    location: 'Athens, Attiki, Greece',
    readMore: 'Read More Text 3'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: '3CP',
    description: 'Feb 2021 - Apr 2022',
    location: 'Patras, Greece',
    readMore: 'Read More Text 2'
  },
  {
    id: 1,
    title: 'Junior Web Developer',
    company: 'Data City Services',
    description: 'Feb 2019 - Dec 2019',
    location: 'Patras, Greece',
    readMore: 'Read More Text 1'
  }
]

const Experience = () => {

  return (
    <section id='experience'>
      <h1>Get to Know</h1>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className='experience__container-liveText' id='liveText'>
          <Typewriter
            options={{
              strings: ['while(!(succeed = try()));'],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
              delay: 200
            }}
          />
        </div>
        <div className="experience__cards">
          {
            jobs.map(({ id, title, company, description, location, readMore }) => {
              return (
                <article key={id} className="experience__card">
                  <div className='experience__card-title'>
                    {title}
                  </div>
                  <div className='experience__card-company'>
                    {company}
                  </div>
                  <div className='experience__card-description'>
                    {description}
                  </div>
                  <div className='experience__card-location'>
                    {location}
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Experience