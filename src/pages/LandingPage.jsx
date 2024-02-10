import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState } from 'react'
import "./landingpage.css"
import { Link } from 'react-router-dom'
import { useUserContext } from '../UserContext'
import GuessingGame from '../extras/game/Game'
import RandomFact from '../extras/facts/RandomFacts'

import AOS from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {

    const [userInput, setUserInput] = useState('');
    const { updateUser } = useUserContext();
    const [rule, setRule] = useState(true)
    const [showGame, setShowGame] = useState(false)
    const [showFact, setShowFact] = useState(false)

   const playGame = () => {
      setShowGame(!showGame)
   }

   const playFact = () => {
    setShowFact(!showFact)
 }
 
     
    

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
      };

      const handleGetMeIn = () => {
   
        updateUser({ name: userInput });
      
      };
    

      const [gameStarted, setGameStarted] = useState(false);

      const startGame = () => {
        setGameStarted(true);
        setRule(!rule)
      };


      
  useEffect(() => {
    AOS.init();
  }, [])
    

  return (
    <div className='welcomepage'>
        <form className='welcome'>
        <FontAwesomeIcon className='smiley' icon={faFaceSmile} spin />
            <div className='display'><h2 className='hh'>Welcome,  {userInput.trim() !== '' ? userInput : 'Visitor!'}</h2></div>
            
            <div  className='extras'>
                <div  data-aos="fade-right" data-aos-duration="4000" className='btn x' onClick={playFact}> Random Fun Facts</div>
                 <div  data-aos="fade-left" className='btn x' onClick={playGame}>Play a Guessing Game</div>
                  
            </div>
            
            <input className='winput' type='text' placeholder='Please enter your name...' 
            value={userInput}
            onChange={handleInputChange}/>

            <Link to="/home"><div className='btn' onClick={handleGetMeIn}>Get me in</div></Link>

            
        </form>
       { showGame ? <div className="gamebox" data-aos="fade-left">
          <h2 className='cancel' onClick={playGame}>X</h2>
      <h1 className='hhh'>Guessing Game</h1>
       { rule ? <p style={{fontSize:".9rem"}}><strong>Rules:</strong><br/>
         Guess the hidden number from three or two options available. Correct guesses earn 10 points; five wrong guesses end the game. Hidden number revealed briefly on incorrect guesses. Restart for a new game which comes with a free guess. 
      </p> : ""}
      {gameStarted ? (
        <GuessingGame />
      ) : (
        
        <button style={{marginTop:"10px"}} onClick={startGame}>Start Game</button>
      )}
    </div> : ""}


    {showFact ? <div className="gamebox"  data-aos="fade-right">
          <h2 className='cancel' onClick={playFact}>X</h2>
      <h1>Random Facts</h1>
      {gameStarted ? (
          <RandomFact />
      ) : (
        <button style={{marginTop:"10px"}} onClick={startGame}>Get Facts</button>
      )}
    </div> : ""}
        
    </div>
  )
}

export default LandingPage