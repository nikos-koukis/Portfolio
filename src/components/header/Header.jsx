import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  const zeroFill = n => {
    return ('0' + n).slice(-2);
  }
  setInterval(() => {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateTime = zeroFill(now.getUTCDate()) + ' ' + monthNames[now.getMonth()] + ' ' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    document.getElementById('date-time').innerHTML = dateTime;
  }, 1000);

  return (
    <header>
      <div className='header__datetime' id='date-time'></div>
      <div className="container header__container">
        <h1>Hi, my name is</h1>
        <h2>Nick Koukis.</h2>
        <h3>I build things for the web.</h3>
        <p>
          I'm a software engineer specializing in building exceptional digital experiences.
        </p>
        <p>
          Currently, I'm focused on data-mining, product maintenance at <a href="https://tgndata.com/" target='_blank' rel="noopener noreferrer">tgndata</a>.
        </p>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header