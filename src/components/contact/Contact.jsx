import React, { useEffect, useState } from 'react'
import './contact.css'

import { FaEnvelope, FaWhatsapp,  FaLinkedin} from 'react-icons/fa'


import  { useRef } from 'react';
import emailjs from 'emailjs-com';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../UserContext';

const Contact = () => {

  const [name, setName] =useState("")
  const { user } = useUserContext();
 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkmov6v', 'template_b9qufsa', form.current, 'RR4iskLGTMZPlkVvQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="fade-up" id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
        <a href='#'><FaEnvelope  className='contact__option-icon'/></a>
          <h4>Email</h4>
          <h5>michaeliskingbd@gmail</h5>
          <a href='mailto:michaeliskingbd@gmail.com' target='_blank'>send a message</a>
        </article>

        <article className='contact__option'>
        <a href='#'><FaLinkedin  className='contact__option-icon'/></a>
          <h4>Linkedin</h4>
          <h5>Michael Aladejyugbe</h5>
          <a href='https://www.linkedin.com/in/michael-aladejuyigbe-6490a7288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>send a message</a>
        </article>

        <article className='contact__option'>
        <a href='#'><FaWhatsapp  className='contact__option-icon'/></a>
          <h4>WhatsApp</h4>
          <h5>08166706741</h5>
          <a href='https://wa.me/+2348166706741' target='_blank'>send a message</a>
        </article>
        </div>
        <form ref = {form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required value={user? user.name: name} onChange={(e) => setName(e.target.value)}/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea type='message' name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'> Send message </button>
        </form>
      </div>

      
    </section>
  )
}

export default Contact