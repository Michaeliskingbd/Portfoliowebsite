import React, { useEffect } from "react";
import "../components/portfolio/portfolio.css";
import IMG1 from "../assets/zeal.JPG";
import IMG2 from "../assets/bati.JPG";
import IMG4 from "../assets/calculator.png";
import IMG6 from "../assets/Snapshot_modernloginpage.png";
import IMG7 from "../assets/n4.png";
import IMG8 from "../assets/portfolio2.jpg";
import IMG9 from "../assets/ai.jpg";
import IMG10 from "../assets/dancerapy2.JPG";
import IMG11 from "../assets/lagostheatrecover.JPG";
import IMG12 from "../assets/freestylecover.JPG";
import IMG13 from "../assets/artis.JPG";
import IMG14 from "../assets/shop.JPG";
import IMG15 from "../assets/project.JPG";
import IMG16 from "../assets/icon.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);

  return (
    <>
      <section id="portfolio">
        <h2>My recent works</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div data-aos="fade-up" className="portfolio__item-image">
              <img src={IMG10} alt="" />
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
            <div
              data-aos="fade-right"
              className="portfolio__item-image  netflix"
            >
              <img src={IMG11} alt="" />
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

          <article className="portfolio__item">
            <div
              data-aos="fade-right"
              className="portfolio__item-image  netflix"
            >
              <img src={IMG12} alt="" />
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
              <img src={IMG1} alt="" />
            </div>
            <h3>Zealworker.com</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://zeal.zealworkers.com"
                className="btn btn-primary"
                target="_blank"
              >
                visit website
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div data-aos="fade-up" className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>Batikash.com</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.batikash.com/"
                className="btn btn-primary"
                target="_blank"
              >
                visit website
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <h1 style={{ margin: 0 }}>
              Saving this spot for your next project{" "}
              <img style={{ width: "80px" }} src={IMG16} alt="" />
            </h1>
          </article>
        </div>
      </section>
      {/*PERSONAL PROJEXT SECTION*/}
      <section id="portfolio">
        <h2>Personal Projects</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div data-aos="fade-up" className="portfolio__item-image">
              <img src={IMG9} alt="" />
            </div>
            <h3>Ai Voiceover</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://ai-voiceover-eight.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div data-aos="fade-up" className="portfolio__item-image">
              <img src={IMG13} alt="" />
            </div>
            <h3>artis.com</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://artis-co.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div data-aos="fade-right" className="portfolio__item-image  ">
              <img src={IMG15} alt="" />
            </div>
            <h3>Project Management app</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://alphatwelve-inky.vercel.app/"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://shoppify-one.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div data-aos="fade-right" className="portfolio__item-image ">
              <img src={IMG14} alt="" />
            </div>
            <h3>Shoppify</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd/shoppify"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://shoppify-one.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div
              data-aos="fade-right"
              className="portfolio__item-image  netflix"
            >
              <img src={IMG7} alt="" />
            </div>
            <h3>Netflix clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://netflix-clone-michaelking.vercel.app"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div data-aos="fade-right" className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>Modern Login-page(Next.js)</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd/Next.js-login-page/tree/main"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://next-js-login-page.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div data-aos="fade-right" className="portfolio__item-image">
              <img src={IMG8} alt="" />
            </div>
            <h3>Financial Ai web App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd/FPAfrontend/tree/main"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://financialprofileapp.onrender.com/"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div data-aos="fade-right" className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>Calculator</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Michaeliskingbd"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://king-calculator.vercel.app"
                className="btn btn-primary"
                target="_blank"
              >
                visit
              </a>
            </div>
          </article>
        </div>

        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "3rem",
          }}
          to="/home"
          className="btn view"
        >
          Go back
        </Link>
      </section>
    </>
  );
};

export default PortfolioPage;
