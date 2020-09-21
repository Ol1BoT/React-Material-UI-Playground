import React from 'react';
import './App.css';
import {Button, createStyles, makeStyles, Theme} from '@material-ui/core'
import { ApplicationBar } from './navigation/MainToolbar';

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}))

function App() {

const classes = useStyles();

  return (
    <div className="App">
      <ApplicationBar/>
      <main className={classes.content}>

      </main>
      {/* <header className="App-header"> */}
    <h1>Testing Once again</h1>
    <Button color="primary" variant='contained'>Testing The Material Button</Button>
      {/* </header> */}
    </div>
  );
}

export default App;
