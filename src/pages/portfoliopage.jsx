import React, { useEffect } from 'react'
import '../components/portfolio/portfolio.css'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/n4.png'
import IMG4 from '../assets/calculator.png'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'



import AOS from 'aos';
import 'aos/dist/aos.css';


const PortfolioPage = () => {

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <section
 
    id='portfolio'>
        <h2>Portfolio</h2>

        <div  className='container portfolio__container'>

        <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG5} alt=''/>
            </div>
            <h3>Artis</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://artis-co.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG1} alt=''/>
            </div>
            <h3>Real Estate website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://hlistng-michael-king.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image  netflix'>
                <img src={IMG3} alt=''/>
            </div>
            <h3>Netflix clone</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://netflix-clone-michaelking.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image'>
                <img src={IMG2} alt=''/>
            </div>
            <h3>Financial Portfolio App</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd/FPAfrontend/tree/main' className='btn' target='_blank'>Github</a>
            <a href='https://financialprofileapp.onrender.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

         <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image'>
                <img src={IMG2} alt=''/>
            </div>
            <h3>E- commerce</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image'>
                <img src={IMG4} alt=''/>
            </div>
            <h3>Calculator</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://king-calculator.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        
        </div>

        <a href='home' className='btn view' >Go back</a>
    </section>
  )
}

export default PortfolioPage