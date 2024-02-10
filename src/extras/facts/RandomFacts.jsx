// RandomFact.js
import React, { useEffect, useState } from 'react';
import "./randomfacts.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const RandomFact = () => {
  const [randomFact, setRandomFact] = useState('');

  const getRandomFact = () => {
    // Replace this array with your own collection of random facts
    const facts = [
        "IBM's first hard drive, the IBM 305 RAMAC, introduced in 1956, had a storage capacity of 5 megabytes and weighed over a ton",
        "The first computer virus for Microsoft DOS, Brain, was created in 1986",
        "The average computer user blinks 7 times a minute, compared to the normal rate of 20 times per minute",
        "The first webcam was used at the University of Cambridge to monitor a coffee pot",
        "Microsoft was originally named 'Micro-Soft' and was founded by Bill Gates and Paul Allen in 1975",
        "The first mobile phone call was made on April 3, 1973, by Martin Cooper, a Motorola executive",
        "The term 'cloud computing' originated from the use of cloud symbols to represent the complex infrastructure of the Internet in diagrams",
        "The world's first computer virus for Microsoft Windows, WinVer 1.4, was discovered in 1992",
        "The 'Ctrl+Alt+Delete' keyboard combination was created by David Bradley and was originally intended to restart a computer",
        "The world's first smartphone, the IBM Simon, was introduced in 1992 and included features such as a calendar, address book, and email",
        "The first computer programmer in history was a woman named Ada Lovelace, who worked with Charles Babbage on his Analytical Engine in the 1840s",
        "The first commercial computer mouse was invented by Douglas Engelbart in 1968",
        "The first computer to defeat a human in a chess match was IBM's Deep Blue in 1997 against Garry Kasparov",
        "Nintendo was originally a playing card company before entering the video game industry",
        "The concept of a '404 error' originated from room 404 at CERN, where the World Wide Web was created",    
"A 'jiffy' is an actual unit of time: 1/100th of a second",
"A 'baker's dozen' is 13 because bakers in medieval England would throw in an extra loaf to avoid being penalized for shortchanging customers",
"The first computer programmer was Ada Lovelace, who wrote the first algorithm for Charles Babbage's Analytical Engine in the 1840s",
"The Apollo 11 guidance computer had less processing power than a modern smartphone",
"The term 'bug' in computer programming was coined when an actual moth caused a malfunction in a Harvard Mark II computer in 1947",
"The first computer mouse was invented by Doug Engelbart in 1964, made of wood",
"The world's first website was created by Tim Berners-Lee in 1991 at CERN",
"Amazon started as an online bookstore in 1994 before expanding into a global e-commerce giant",
"Apple's first product was the Apple I computer, hand-built by Steve Wozniak and sold for $666.66",
"The QWERTY keyboard layout was designed in 1873 for typewriters and is still widely used today",
"The first computer virus, the Creeper, was written in 1971 as an experiment and displayed the message 'I'm the creeper, catch me if you can!'",
"The term 'Wi-Fi' doesn't stand for anything; it was just a catchy name created by a branding agency",
"Google's original name was 'Backrub' before it was changed to Google in 1997",
"Linus Torvalds created the Linux operating system kernel in 1991 and made it open-source",
"The first emoji was created in 1999 by Shigetaka Kurita in Japan",
"NASA's Apollo 11 mission used a computer with only 64 kilobytes of memory to land humans on the Moon in 1969",
"Every 60 seconds, over 500 hours of video content is uploaded to YouTube",
"The first computer mouse was made of wood and had only one button, created by Douglas Engelbart in 1964",
"The term 'bug' in computer programming originated when a moth caused a malfunction in an early computer",
"Alan Turing, the father of computer science, is known for breaking the Enigma code during World War II",
"The first electronic computer, ENIAC, weighed about 27 tons and occupied a space of 1800 square feet",
"ARPANET, the precursor to the internet, was launched in 1969 with only four connected nodes",
"The first domain name ever registered was 'symbolics.com' on March 15, 1985",
"Bill Gates' house was designed using a Macintosh computer",
"The first smartphone with a touchscreen was the IBM Simon, introduced in 1992",
"Wi-Fi technology was developed by a group of engineers called the 'Wireless Ethernet Compatibility Alliance' (WECA)",
"The computer mouse was invented by Doug Engelbart in 1964 while working at the Stanford Research Institute",
"The term 'hackathon' was coined by OpenBSD developer Sean Hunt in 1999",
"NASA's Apollo 11 mission used a computer with only 64 kilobytes of memory to land on the Moon",
"Google's search engine was originally named 'Backrub' before it was renamed",
"The first webcam was used to monitor a coffee pot at the University of Cambridge",
"The term 'Bluetooth' is named after a 10th-century Danish king, Harald 'Bluetooth' Gormsson",








      // Add more facts as needed
    ];

    // Get a random fact
    const fact = facts[Math.floor(Math.random() * facts.length)];
    setRandomFact(fact);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="random-fact"  data-aos="fade-up">
      <p  >{randomFact}</p>
      <button className='btn r' onClick={getRandomFact}>Next</button>
    </div>
  );
};

export default RandomFact;
