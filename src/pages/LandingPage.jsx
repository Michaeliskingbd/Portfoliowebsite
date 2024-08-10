import React, { useEffect, useState } from 'react';
import "./landingpage.css";
import { useUserContext } from '../UserContext';
import GuessingGame from '../extras/game/Game';
import RandomFact from '../extras/facts/RandomFacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import data from '../extras/facts/data';
import sound1 from "../assets/pageturn.mp3";

const LandingPage = () => {
    const [userInput, setUserInput] = useState('');
    const { updateUser } = useUserContext();
    const [rule, setRule] = useState(true);
    const [showGame, setShowGame] = useState(false);
    const [showFact, setShowFact] = useState(false);
    const [randomFact, setRandomFact] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const navigate = useNavigate();

    const playGame = () => setShowGame(!showGame);
    const playFact = () => setShowFact(!showFact);
    const handleInputChange = (e) => setUserInput(e.target.value);

    const handleGetMeIn = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/home');
            setLoading(false);
        }, 5000);
        updateUser({ name: userInput });
    };

    const startGame = () => {
        setGameStarted(true);
        setRule(!rule);
    };

 
      const getRandomFact = () => {
        const gameOver = new Audio(sound1);
        const randomIndex = Math.floor(Math.random() * data.length);
        gameOver.play()
        setRandomFact(data[randomIndex]);
      };
 

    useEffect(() => {
        AOS.init();
    }, []);

    const showModal = () => setOpen(true);
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => setOpen(false);

    return (
        <div className='welcomepage'>
            <form className='welcome'>
                <div className='display'>
                    <h2 className='hh'>Welcome, {userInput.trim() !== '' ? userInput : 'Visitor!'}</h2>
                </div>
                <div className='extras'>
                <Button className='ant'
                    data-aos="fade-right" data-aos-duration="4000"
                    key="link"
                    type="dashed"
                    loading={loading}
                    onClick={showModal}
                    >Random Fun Facts
                </Button>

                <Button className='ant'
                    data-aos="fade-left" data-aos-duration="4000"
                    key="link"
                    type="dashed"
                    loading={loading}
                    onClick={playGame}
                    >Play a Guessing Game
                </Button>
                
                </div>
                <input className='winput' type='text' placeholder='Please enter your name...' value={userInput} onChange={handleInputChange} />
                <Button style={{padding: "1.5rem 3rem"}} 
                    key="link"
                    type="primary"
                    loading={loading}
                    onClick={handleGetMeIn}
                    >Get me in
                </Button>
            </form>

            <Modal open={open} title="Random Fun Facts" onOk={handleOk} onCancel={handleCancel} footer={[
              <Button onClick={getRandomFact}>Next</Button>
            ]}>
                <RandomFact randomFact={randomFact} getRandomFact={getRandomFact}/>
                
            </Modal>

            <Modal  open={showGame} onOk={handleOk} onCancel={playGame} footer={null}>
              
                {rule && (
                    <p style={{ fontSize: ".9rem" }}>
                        <strong>Rules:</strong><br />
                        Guess the hidden number from three or two options available. Correct guesses earn 10 points; five wrong guesses end the game. Hidden number revealed briefly on incorrect guesses. Restart for a new game which comes with a free guess.
                    </p>
                )}
                {gameStarted ? (
                    <GuessingGame />
                ) : (
                    <Button type='primary' style={{marginTop:"1rem"}} onClick={startGame}>Start Game</Button>
                )}
            </Modal>
        </div>
    );
};

export default LandingPage;
