import React, { useEffect, useState } from 'react';
import "./landingpage.css";
import { useUserContext } from '../UserContext';
import GuessingGame from '../extras/game/Game';
import RandomFact from '../extras/facts/RandomFacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Modal, Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import data from '../extras/facts/data';
import sound1 from "../assets/pageturn.mp3";
import { AudioOutlined } from '@ant-design/icons';
import whatimage from "../assets/what.png";
import { FloatButton } from 'antd';
import { IoGameControllerOutline } from "react-icons/io5";
import music from "../assets/birds.mp3"

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

    const loginmusic = new Audio(music);

    const handleGetMeIn = () => {
        loginmusic.play(); // Start playing the music
      
        setLoading(true);
        
        // After 10 seconds, stop the music and navigate to home
        setTimeout(() => {
          loginmusic.pause(); // Stop the music
          loginmusic.currentTime = 0; // Reset the music to the beginning
          navigate('/home');
          setLoading(false);
        }, 10000);
      
        updateUser({ name: userInput });
      };
      

    const startGame = () => {
        setGameStarted(true);
        setRule(!rule);
    };

    const getRandomFact = () => {
        const gameOver = new Audio(sound1);
        const randomIndex = Math.floor(Math.random() * data.length);
        gameOver.play();
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

    // Text-to-Speech Function
    const speakText = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };

    const { Search } = Input;
    
    // Modified suffix with onClick for text-to-speech
    const suffix = (
        <span onClick={() => speakText(userInput)}>
            <AudioOutlined data-aos="fade-left"
                style={{
                    fontSize: 16,
                    color: '#1677ff',
                    cursor: 'pointer' 
                }}
            />
        </span>
    );
 

    return (
        <>
            <section className='imp-welcomepage'>
                <div className='imp-content'>
                    <h1 data-aos="fade-left" data-aos-duration="2000" >What's Your Name?</h1>
                    <Search className='imp-input'
                        placeholder="input search text"
                        enterButton={loading ? <Spin/> : "Proceed"}
                        size="large"
                        suffix={suffix}
                        onSearch={handleGetMeIn}
                        value={userInput} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='imp-image'>
                    <img data-aos="fade-right" data-aos-duration="2000" src={whatimage} alt="What is your name?" />
                </div>
               
                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ insetInlineEnd: 50 }}
                    icon={<IoGameControllerOutline />}
                >
                    <FloatButton onClick={showModal} />
                    <FloatButton icon={<IoGameControllerOutline />} onClick={playGame} />
                </FloatButton.Group>
              
            </section>

            <Modal open={open} title="Random Fun Facts" onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="next" onClick={getRandomFact}>Next</Button>
            ]}>
                <RandomFact randomFact={randomFact} getRandomFact={getRandomFact} />
            </Modal>

            <Modal open={showGame} onOk={handleOk} onCancel={playGame} footer={null}>
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
        </>
    );
};

export default LandingPage;
