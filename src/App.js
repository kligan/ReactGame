import React from 'react';
import Game from './components/Game'
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Luckiest Guy',
      'cursive',
    ].join(','),
    width: '100px',
    height: '50px',
    color: 'pink',
    background: 'green'
  },});

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'absolute',
    width: '100%',
    boxShadow: 'inset 0 0 300px black',
    color: props => props.color,
  },
});

export default function App(props) {
  const classes = useStyles(props);
  return (
    <ThemeProvider theme={theme}>
  <div className={classes.root} >
    <CssBaseline />
    <Game style={theme.typography} Github={"https://github.com/kligan/ReactGame"}/>
  </div>
  </ThemeProvider>
  )
}



