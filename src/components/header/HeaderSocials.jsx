import { faBehance, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/michael-aladejuyigbe-6490a7288/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href='https://github.com/Michaeliskingbd' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='http://behance.com' target='_blank'><FontAwesomeIcon icon={faBehance} /></a>
    </div>
  )
}

export default HeaderSocials