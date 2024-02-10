import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../UserContext'


const Header = () => {

  const { user } = useUserContext();
  

    const [showPopup, setShowPopup] = useState(false);

    
  
    useEffect(() => {

    
        const timeoutId1 = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
     
    const timeoutId = setTimeout(() => {
        setShowPopup(false);
    }, 10000);
  
     
    return () => {
      clearTimeout(timeoutId);
    };
    }, []);
  
    

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <header>
      <div className={`popup-message ${showPopup ? 'visible' : 'hidden'}`}>
      <p>Dear {user ? user.name : "visitor"}<br/>Please note that this site is still under contruction. Thank you  <FontAwesomeIcon  icon={faFaceSmile}/></p>
    </div>
      <div   className="container header__container">
        <h5 data-aos="flip-right" data-aos-duration="4000">Hello <span style={{color:"#4db5ff"}}>{user ? user.name : 'Visitor'}</span> i'm</h5>
        <h1 className ="fname"  data-aos="flip-left">Michael</h1>
        <h1 className ="lname"  data-aos="flip-left">Aladejuyigbe</h1>
        <h5 className="sd" data-aos="flip-down"  >
          Software Developer
        </h5>
        <CTA/>
       

       

         <a href='#contact' className='scroll__down'>Scroll down</a>
    
      </div>
    
    </header>
  )
}

export default Header