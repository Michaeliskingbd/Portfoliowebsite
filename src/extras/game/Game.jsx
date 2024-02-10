// GuessingGame.js
import React, { useState, useEffect } from 'react';
import Options from './Options';
import "./game.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

const GuessingGame = () => {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [blurredNumber, setBlurredNumber] = useState(null);
  const [options, setOptions] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameScreen , setGameScreen] = useState(true)


  const generateOptions = () => {
    const newCorrectNumber = Math.floor(Math.random() * 10) + 1;
    setCorrectNumber(newCorrectNumber);

    // Blur the correct number
    setBlurredNumber(newCorrectNumber.toString().replace(/\d/g, '***'));

    // Generate two additional random options
    const additionalOptions = Array.from({ length: 2 }, () =>
    Math.floor(Math.random() * 10) + 1
  );

    // Make sure the correct number and additional options are included
    const allOptions = Array.from(new Set([newCorrectNumber, ...additionalOptions]));

    // Shuffle the options
    allOptions.sort(() => Math.random() - 0.5);

    setOptions(allOptions);
  };

  useEffect(() => {
    generateOptions();
  }, []);

  const handleOptionSelect = (selectedOption) => {
    setRevealed(true);

    // Show the correct number after a short delay (e.g., 1 second)
    setTimeout(() => {
      if (parseInt(selectedOption, 10) === correctNumber) {
        alert('Exellent! You guessed the correct number!');
        setScore(score + 10); // Increase score by 10 for a correct guess
      } else {
        alert(`Awkward! The correct number was ${correctNumber}`);
        setWrongGuesses(wrongGuesses + 1); // Increase wrong guesses count
      }

      // Check for game over (5 wrong guesses)
      if (wrongGuesses === 4) {
        alert('Game Over! Lifeline used up!');
        setGameScreen(!gameScreen)
        // Optionally, you can reset the game or redirect to a game-over screen.
        // For simplicity, we reset the game here.
        setWrongGuesses(0);
        setScore(0);
      } else {
        // Continue the game
        generateOptions();
        setRevealed(false);
      }
    }, 1000);
  };

  


  const restartGame = () => {
    setGameScreen(true)
  
  };


  const lifeline = 5-wrongGuesses


  return (
   <> {gameScreen? <div className="guessinggame">
      <p>Guess the hidden number:<br/>
      <h3 style={{fontSize:"2rem", marginLeft:"40%"}}> {revealed ? correctNumber : blurredNumber}</h3></p>
      <Options options={options} onSelect={handleOptionSelect} />
      <div className='record'>
      <p>Score: {score}</p>
      <p>Lifeline: {lifeline}</p>
      </div>
      
      
    </div>: <><h2 style={{margin:"auto"}}>Game Over! <br/> <FontAwesomeIcon icon={faFaceSadTear} beatFade  style={{marginLeft:"30%", fontSize:"3rem"}}/></h2>
    <button style={{marginTop:"10px"}} onClick={restartGame}>Restart Game</button></>} </> 
  );
};

export default GuessingGame;


