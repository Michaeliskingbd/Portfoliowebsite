import React, { useEffect, useMemo } from 'react';
import './header.css';
import CTA from './CTA';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../UserContext';
import { notification } from 'antd';
import sound from "../../assets/noti.mp3";

const Header = () => {
  const { user } = useUserContext();

  const [api, contextHolder] = notification.useNotification();
  const notificationsound = useMemo(() => new Audio(sound), []); // Memoized to avoid recreating the audio on each render

  const openNotification = () => {
    api.info({
      message: `Hello ${user ? user.name : "Visitor"}`,
      description: (
        <>
          Please note that this site is still under construction. Thank you! <FontAwesomeIcon icon={faFaceSmile} />
        </>
      ),
      placement: 'topRight',
      duration: 7,
    });
    
    notificationsound.play().catch((error) => {
      console.error("Error playing the notification sound:", error);
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      openNotification();
    }, 3000); 

    return () => clearTimeout(timeoutId);
  }, [user]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header>
      {contextHolder} {/* Context for the notification */}

      <div className="container header__container">
        <h5 data-aos="flip-right" data-aos-duration="4000">
          Hello <span style={{ color: "#4db5ff" }}>{user ? user.name : 'Visitor'}</span>, I'm
        </h5>
        <h1 className="fname" data-aos="flip-left">Michael</h1>
        <h1 className="lname" data-aos="flip-left">Aladejuyigbe</h1>
        <h5 className="sd" data-aos="flip-down">Software Developer</h5>
        <CTA />
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
