import React, { useEffect, useState } from 'react'
import './portfolio.css'
import IMG5 from '../../assets/portfolio5.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';


const Portfolio = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)



  const Handleclick = () => {
    setLoading(true)
    setTimeout(() => {
      navigate('/portfoliopage')
      setLoading(false);
  }, 5000);

  }

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
            <h3>artis.com</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd' className='btn' target='_blank'>Github</a>
            <a href='https://artis-co.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          {/*<article  className='portfolio__item'>
            <div data-aos="fade-right" className='portfolio__item-image  netflix'>
                <img src={IMG3} alt=''/>
            </div>
            <h3>Ecommerce website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/Michaeliskingbd/shoppify' className='btn' target='_blank'>Github</a>
            <a href='https://shoppify-one.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>*/}


          
        </div>

        
        <Button className='btn view' 
        type='dashed'
        loading={loading}

        onClick={Handleclick}
        >
          More project
        </Button>
    </section>
  )
}

export default Portfolio