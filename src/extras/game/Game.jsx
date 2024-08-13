import React, { useState, useEffect } from 'react';
import Options from './Options';
import "./game.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import icon from "../../assets/w.png"
import trophy from "../../assets/trophy.png"
import { Button } from 'antd';
import sound1 from "../../assets/success-1-6297.mp3";
import sound2 from "../../assets/nastysound.mp3";
import sound3 from "../../assets/select.mp3";
import sound4 from "../../assets/gameover.mp3";
import sound5 from "../../assets/gameon.mp3";

import AOS from 'aos';
import 'aos/dist/aos.css';

const GuessingGame = () => {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [blurredNumber, setBlurredNumber] = useState(null);
  const [options, setOptions] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameScreen, setGameScreen] = useState(true);
  const [shake, setShake] = useState(false);

  const generateOptions = () => {
    const newCorrectNumber = Math.floor(Math.random() * 10) + 1;
    setCorrectNumber(newCorrectNumber);
    setBlurredNumber(<p style={{fontSize:"30px", marginBottom:"1rem"}}>&#127829;</p>);
    const additionalOptions = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10) + 1);
    const allOptions = Array.from(new Set([newCorrectNumber, ...additionalOptions]));
    allOptions.sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  };

  useEffect(() => {
    generateOptions();
  }, []);

  const handleOptionSelect = (selectedOption) => {
    const correctSound = new Audio(sound1);
    const wrongSound = new Audio(sound2);
    const selectSound = new Audio(sound3);
    const gameOver = new Audio(sound4);

    selectSound.play()
    setRevealed(true);
  
    setTimeout(() => {
      if (parseInt(selectedOption, 10) === correctNumber) {
        correctSound.play()
        setScore(score + 10);
        setWrongGuesses(wrongGuesses - 1)
      } else {
        wrongSound.play()
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setWrongGuesses(wrongGuesses + 1);
      }

      if (wrongGuesses === 5) {
        setGameScreen(false);
        setTimeout(() => {
          gameOver.play()
        },1000)
       
        setWrongGuesses(0);
        setScore(0);
      } else {
        generateOptions();
        setRevealed(false);
      }
    }, 1000);
  };

  const restartGame = () => {
    const gameOn = new Audio(sound5);
    setGameScreen(true);
    gameOn.play()
    generateOptions();
  };

  const lifeline = 5 - wrongGuesses;

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
      {gameScreen ? (
        <div className={`guessinggame ${shake ? 'shake' : ''}`}>
          <h1>Guessing Game</h1>
          <p>Guess the hidden number:</p>
          <h3 style={{fontSize:"30px", marginBottom:"1rem"}}>{revealed ? correctNumber : blurredNumber}</h3>
          <Options options={options} onSelect={handleOptionSelect} />
          <div className='record'>
            <p><img src={trophy}/> Score:<p style={{transition:"ease-in-out all 1s"}}>{score}</p></p>
            <p><img src={icon}/> Life:<p>{lifeline}</p></p>
          </div>
        </div>
      ) : (
        <>
          <h2 style={{ margin: "auto" }}>
            Game Over! <br />
            <FontAwesomeIcon icon={faFaceSadTear} beatFade style={{ marginLeft: "45%", fontSize: "3rem" }} />
          </h2>
          <Button type='primary' style={{ marginTop: "10px" }} onClick={restartGame}>Restart Game</Button>
        </>
      )}
    </>
  );
};

export default GuessingGame;
