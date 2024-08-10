import React, { useEffect } from 'react';
import "./randomfacts.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RandomFact = ({ randomFact }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="random-fact" data-aos="fade-up">
            <p>{randomFact}</p>
        </div>
    );
};

export default RandomFact;
