import React, { useEffect } from 'react'
import './experience.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '../../skills/Skills';


const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="fade-up" data-aos-duration="3000"  id='experience'>
      <h5>Experience</h5>
      <h2>My Skills</h2>
        <Skills/>  
    </section>
  )
}

export default Experience