import React from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h1>Get In Touch</h1>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nikoskoukis99@gmail.com</h5>
            <a href="mailto:nikoskoukis99@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Νίκος Κουκής</h5>
            <a href={process.env.REACT_APP_MESSENGER} target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* <form name="contact" method='POST' netlify >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary' id='contactBtn'>Send Message</button>
        </form> */}
        <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact