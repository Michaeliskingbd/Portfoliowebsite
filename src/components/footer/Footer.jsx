import React, { useEffect } from 'react'
import './footer.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"


import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <footer>
    

      <ul   data-aos="fade-down" className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#sevices'>Services</a></li>
        <li><a href='#portfolio'>Potfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://web.facebook.com/michaeliskingbd/'><FaFacebook/></a>
      <a href='https://twitter.com/Michaelkingbd'><FaTwitter/></a>
      <a href='https://www.instagram.com/michaelkingrbn/'><FaInstagram/></a>
      <a href='https://github.com/Michaeliskingbd/'><FaGithub/></a>
      <a href='www.linkedin.com/in/michael-aladejuyigbe-573b78296'><FaLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Mixhael King. All rights reserve.</small>
      </div>
    </footer>
  )
}

export default Footer