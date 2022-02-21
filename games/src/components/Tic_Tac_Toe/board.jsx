import React from 'react';
import Square from "./square";

function Board({ squares, onClick }) {
    return (
        <div className='board'>
            {squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
                ))}
        </div>
    );
}

export default Board;