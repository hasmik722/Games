import React, { useState, useEffect } from 'react';
import Figure from "./figure";
import Word from "./word";
import Notification from "./notification";
import PopUp from "./popUp";
import WrongLetters from "./wrongLetters";
import {words} from "./constants";
import './style.css'

let selectedWord = words[Math.floor(Math.random() * words.length)]

function Hangman() {
    const [play, setPlay] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const show = setter => {
        setter(true);
        setTimeout(() => {
            setter(false);
        }, 500)
    }

    useEffect(() => {
        const  handleKeydown = event => {
            const {key, keyCode} = event;
            if (play && keyCode >= 65 && keyCode <=90) {
                const letter = key.toLowerCase();

                if(selectedWord.includes(letter)) {
                    if(!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter])
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if(!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [correctLetters, wrongLetters, play]);

    const playAgain = () => {
        setPlay(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <>
            <h1 className='game_header'>Hangman</h1>
            <p>Find the hidden word --> Enter a letter</p>
            <div className='game-container'>
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
            <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters}
                   selectedWord={selectedWord} setPlay={setPlay} playAgain={playAgain} />
            <>
                {showNotification && <Notification showNotification={showNotification} />}
            </>
        </>
    );
}

export default Hangman;