import { Button } from '@material-ui/core'
import React from 'react'

const style = {
    height: '90px',
    width: '90px',
}

function Square({onClick, value}) {
    return (
        <div>
        <Button style={style} onClick={onClick} variant="outlined" color="secondary">{value}</Button>
        </div>
    )
}

export default Square
