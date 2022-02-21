import React, { useState } from 'react';
import Board from "./board";
import Winner from "./winner";
import Results from "./results";
import './style.css'


function TicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = Winner(history[stepNumber]);
    const X0 = xIsNext ? 'X' : 'O';

    const handleClick= (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;

        squares[i] = X0;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };


    const reset = () => {
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXIsNext(true)
    }

    return (
        <>
            <h1 className='game_header'>Tic - Tac - Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className='game_info__wrapper'>
                <button onClick={reset}>Restart</button>
                <h3>{(winner && winner !== 'draw') ?
                        <Results reset={reset}>Winner -- {winner}</Results>:
                    (winner && winner === 'draw') ?
                        <Results reset={reset}>DRAW</Results> :
                        'Next Player: ' + X0}</h3>
            </div>
        </>
    );
}

export default TicTacToe;
