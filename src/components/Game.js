import React, {useState} from 'react'
import Board from './Board'
import helper from '../helper'


const styles = {
    width: '300px',
    margin: '0px auto', 
    textAlign: 'center',
    fontSize: '2rem',
    color: 'white'
};

const title = { 
display: 'flex',
justifyContent: 'center',
color: 'white',
fontSize: '5rem',
textAlign: 'center',
border: '2px solid #dadada',
borderRadius: '7px',
borderColor: '#9ecaed',
boxShadow: '0 0 10px #9ecaed'
}


function Game({style,Github}) {

const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setxIsNext] = useState(true);
const winner = helper(board);

    const handleClick = (i) =>{
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setxIsNext(!xIsNext)
    }

    const renderMoves = () => (
        <button style={style}  onClick={() => setBoard(Array(9).fill(null))}>
            Reset 
        </button>
    )

    const github = () =>{
        window.open(Github);
    }

    return (
        <>
           <div>
            <p style={title}>React Tic Tac Toe </p>
            <Board squares={board} onClick={handleClick}/> 
            <div style={styles}>
               <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
               {renderMoves()}
               <button style={style} onClick={github}>Github</button>
            </div>
            
           </div>
        </>
    )
}

export default Game
