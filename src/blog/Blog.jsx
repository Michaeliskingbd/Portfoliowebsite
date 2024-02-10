import React, { useEffect } from 'react'
import "../components/about/about.css"
import ME from '../../src/assets/me-about.jpg'
import "./blog.css"
import { MdOutlineDoubleArrow } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const Blog = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="fade-up" data-aos-duration="8000"  id='about'>
      <h5>Get To read</h5>
      <h2>My Blog</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div data-aos="flip-up" className='about__cards'>
            {/*<article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small> 
             </article>*/}

           {/*<article className='about__card'>
              <FaXingSquare className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small> 
              </article>*/ }

            {/*<article className='about__card'>
              <FaLaptop className='about__icon'/>
              <h5>Projects</h5>
              <small>Multiple Projects completed</small> 
            </article>*/}

          </div>
          <div className='blinks'>
            <a href='https://medium.com/@michaeliskingbd/mastering-api-integration-with-express-js-a-practical-guide-efa3cac6d9a4' className='blog-link'>Mastering API Integration with Express.js: A Practical Guide < MdOutlineDoubleArrow/></a>
            <a href='https://medium.com/@michaeliskingbd/a-beginners-guide-to-learning-react-fcafec87dba4' className='blog-link'>A Beginner’s Guide to Learning React< MdOutlineDoubleArrow/></a>
            <a href='https://medium.com/@michaeliskingbd/getting-started-with-axios-f0676a3afc64' className='blog-link'>Getting Started with Axios: A Powerful HTTP Client for JavaScript < MdOutlineDoubleArrow/></a>
            <a href='https://medium.com/@michaeliskingbd/getting-started-with-node-js-a-beginners-guide-58e05e12cb1b' className='blog-link'>Getting Started with Node.js: A Beginner's Guide< MdOutlineDoubleArrow/></a>
            </div>
            <a href='https://medium.com/@michaeliskingbd' className='btn '>Visit Blog</a>

        </div>
      </div>
    </section>
  )
}

export default Blog