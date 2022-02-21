import React from 'react';
import Hangman from "./components/Hangman";
import Tic_Tac_Toe from "./components/Tic_Tac_Toe";
import './App.css'

function App() {
    return (
        <>
            <div className='info'>
                <h1>Games</h1>
                <ul>
                    <li>Hangman</li>
                    <li>Tic-Tac-Toe</li>
                </ul>
            </div>
            <Hangman />
            <Tic_Tac_Toe />
        </>
    );
}

export default App;