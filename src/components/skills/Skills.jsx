import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Rating from '@mui/material/Rating';

const frontendSkills = [
  {
    id: 1,
    title: 'HTML / HTML5',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={5} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 2,
    title: 'CSS / CSS3',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 3,
    title: 'JavaScript / JQuery',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 4,
    title: 'PHP',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 5,
    title: 'React',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={3} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 6,
    title: 'Node js',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];

const frameworkSkills = [
  {
    id: 1,
    title: 'CodeIgniter',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 2,
    title: 'Next.js',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={3} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 3,
    title: 'Express',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={2} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={2} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];

const databaseSkills = [
  {
    id: 1,
    title: 'MySQL',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 2,
    title: 'SQLite',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 3,
    title: 'MongoDB',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={2} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];

const cms = [
  {
    id: 1,
    title: 'WordPress / WooCommerce',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];

const VersionCOntrolSystems = [
  {
    id: 1,
    title: 'Git',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  },
  {
    id: 2,
    title: 'Bitbucket',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={4} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];

const tools = [
  {
    id: 1,
    title: 'Docker',
    icon: <BsPatchCheckFill className="skills__details-icon" />,
    rating: <Rating value={2} sx={{ '& .MuiRating-icon': { color: 'yellow' } }} readOnly />
  }
];
const Skills = () => {
  return (
    <section id='skills'>
      <h1>Get to Know</h1>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Programming Languages</h3>
          <div className="skills__content">
            {
              frontendSkills.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="skills__framework">
          <h3>Frameworks</h3>
          <div className="skills__content">
            {
              frameworkSkills.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="skills__databases">
          <h3>DataBase Systems</h3>
          <div className="skills__content">
            {
              databaseSkills.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="skills__cms">
          <h3>CMS</h3>
          <div className="skills__content">
            {
              cms.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="skills__vcs">
          <h3>Version Control System</h3>
          <div className="skills__content">
            {
              VersionCOntrolSystems.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        {/* <div className="skills__tools">
          <h3>Tools</h3>
          <div className="skills__content">
            {
              tools.map(({ id, title, icon, rating }) => {
                return (
                  <article key={id} className="skills__details">
                    <div className='skills__details-info'>
                      {icon}
                      {title}
                    </div>
                    <div>
                      {rating}
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills