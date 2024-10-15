import React, { useEffect } from 'react'
import '../components/portfolio/portfolio.css'
import IMG1 from '../assets/zeal.JPG'
import IMG2 from '../assets/bati.JPG'
import IMG3 from '../assets/City.JPG'
import IMG4 from '../assets/calculator.png'
import IMG6 from '../assets/Snapshot_modernloginpage.png'
import IMG7 from '../assets/n4.png'
import IMG8 from '../assets/portfolio2.jpg'
import IMG9 from '../assets/ai.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


const PortfolioPage = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);
 
  return (
    <section
 
    id='portfolio'>
        <h2>Portfolio</h2>

        <div  className='container portfolio__container'>

        <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG1} alt=''/>
            </div>
            <h3>Zealworker</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://zeal.zealworkers.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG2} alt=''/>
            </div>
            <h3>Batikash</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://batikash-web.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG9} alt=''/>
            </div>
            <h3>Ai Voiceover</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://ai-voiceover-eight.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div data-aos="fade-up" className='portfolio__item-image'>
                <img  src={IMG3} alt=''/>
            </div>
            <h3>citylight</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://hlistng-michael-king.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image  netflix'>
                <img src={IMG7} alt=''/>
            </div>
            <h3>Netflix clone</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://netflix-clone-michaelking.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image'>
                <img src={IMG6} alt=''/>
            </div>
            <h3>Modern Login-page(Next.js)</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd/Next.js-login-page/tree/main' className='btn' target='_blank'>Github</a>
            <a href='https://next-js-login-page.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>


          <article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image'>
                <img src={IMG8} alt=''/>
            </div>
            <h3>Financial Portfolio App</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd/FPAfrontend/tree/main' className='btn' target='_blank'>Github</a>
            <a href='https://financialprofileapp.onrender.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
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

        <Link style={{display:"flex", justifyContent:"center", alignContent:"center", marginBottom:"3rem"}} to='/home' className='btn view' >Go back</Link>
    </section>
  )
}

export default PortfolioPage