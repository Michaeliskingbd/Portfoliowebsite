import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/n4.png'
import IMG4 from '../../assets/calculator.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <section
 
    id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div  className='container portfolio__container'>

        <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG5} alt=''/>
            </div>
            <h3>Artis</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://artis-co.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG1} alt=''/>
            </div>
            <h3>Real Estate website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://hlistng-michael-king.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image  netflix'>
                <img src={IMG3} alt=''/>
            </div>
            <h3>Netflix clone</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://netflix-clone-michaelking.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        </div>

        <a href='portfoliopage' className='btn view' >View all projects</a>
    </section>
  )
}

export default Portfolio