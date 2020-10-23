import React from 'react';
import Square from './Square'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    style : {
        width: "250px",
        height: "250px",
        margin: "0px auto",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    }
  });

function Board({squares, onClick},props) {
    const classes = useStyles(props);
    return (
        <div className={classes.style} >    
            
            {squares.map((square, i) =>(
                 <Square key={i} onClick={()=> onClick(i)} value={square}/>
            ))}
        
        </div>
    )
}

export default Board
