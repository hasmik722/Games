import React, {useEffect} from 'react';

function PopUp({correctLetters, wrongLetters, selectedWord, setPlay, playAgain}) {
    let finalMessage = '';
    let finalMessageRevealWord = ''
    let play = true;

    const checkWin = (correct, wrong, word) => {
        let status = 'win';

        word.split('').forEach(letter => {
            if(!correct.includes(letter)){
                status = '';
            }
        });
        if(wrong.length === 6) {
            status = 'lose'
        }
        return status;
    }

    useEffect(() => setPlay(play));

    if(checkWin (correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congratulations! You Win!!!';
        play = false;
    } else if(checkWin (correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'Unfortunately You lost.';
        finalMessageRevealWord = `The word was:  ${selectedWord}`;
        play = false;
    }

    return (
        <div className='popup-container' style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className='popup'>
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default PopUp;