import React from 'react'
import './testimonial.css'
import data from '../../Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}


      >
       { 
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
            <img src={avatar} alt='Avatar one'/> </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
           
        </SwiperSlide>
          )
        })
       }

      </Swiper>
    </section>
  )
}

export default Testimonial