import React, { useEffect, useState } from "react";
import "./portfolio.css";
import IMG5 from "../../assets/dancerapy2.JPG";
import IMG1 from "../../assets/lagostheatrecover.JPG";
import IMG2 from "../../assets/freestylecover.JPG";

import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const Handleclick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/portfoliopage");
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div data-aos="fade-right" className="portfolio__item-image  netflix">
            <img src={IMG2} alt="" />
          </div>
          <h3>frestylefridaywithnm.com </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Michaeliskingbd"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://freestylefridaywithnm.com"
              className="btn btn-primary"
              target="_blank"
            >
              Visit website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div data-aos="fade-up" className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Dancerapy.org</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Michaeliskingbd"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://Dancerapy.org"
              className="btn btn-primary"
              target="_blank"
            >
              Visit website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div data-aos="fade-right" className="portfolio__item-image  netflix">
            <img src={IMG1} alt="" />
          </div>
          <h3>Lagostheatreigando.com </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Michaeliskingbd"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://lagostheatreigando.com"
              className="btn btn-primary"
              target="_blank"
            >
              Visit website
            </a>
          </div>
        </article>
      </div>

      <Button
        className="btn view"
        type="dashed"
        loading={loading}
        onClick={Handleclick}
      >
        More project
      </Button>
    </section>
  );
};

export default Portfolio;
