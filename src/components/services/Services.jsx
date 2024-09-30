import React from 'react'
import './services.css'
import { RiCheckDoubleFill } from "react-icons/ri";
const Services = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Captivating UI Design: Create engaging interfaces.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Flawless Frontend Development: Implement designs seamlessly.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Lightning-Fast Performance: Optimize for speed and responsiveness.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Inclusive Accessibility: Ensure accessibility for all users.</p>
            </li> 

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Collaborative Excellence: Drive success through teamwork and communication.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Database Management: Efficiently handle data storage and retrieval.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>API Development: Build scalable and secure APIs.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Performance Optimization: Fine-tune for speed and reliability.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Security Implementation: Protect sensitive data.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Automated Testing: Ensure reliable software delivery.</p>
            </li> 

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Cloud Integration: Seamlessly integrate with cloud services for scalability and flexibility.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Hosting</h3>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Reliable Hosting: Secure and dependable website hosting.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Scalable Infrastructure: Flexible resources for changing demands.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Performance Monitoring: Constantly optimize for speed and uptime.</p>
            </li>

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>Security Measures: Strong protection against cyber threats.</p>
            </li> 

            <li>
              <RiCheckDoubleFill  className='service__list-icon'/>
              <p>24/7 Support: Always available for assistance.




</p>
            </li>
          </ul>
        </article>
      </div>
      
      </section>
  )
}

export default Services