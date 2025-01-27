import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/ascot1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptop, FaXingSquare } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container about__container"
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div data-aos="flip-up" className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FaXingSquare className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Satisfied Clients Globally</small>
            </article>

            <article className="about__card">
              <FaLaptop className="about__icon" />
              <h5>Projects</h5>
              <small>Multiple Projects completed</small>
            </article>
          </div>
          <p>
            {" "}
            I am an highly motivated software engineering professional with
            experience in developing, deploying, and maintaining web
            applications. Skilled in the utilization of various technologies
            such as Javascript, Typescript, React, NextJS, CSS, Tailwind,
            Node.js, ExpressJS, NodeJS, MySQL, MongoDB and many more.
            Experienced in working in team-oriented software development
            projects and agile development methodologies. Passionate about
            developing innovative and efficient software solutions that meet
            customer needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
