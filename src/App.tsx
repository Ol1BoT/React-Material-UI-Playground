import React from 'react';
import './App.css';
import {Button} from '@material-ui/core'
import { ApplicationBar } from './navigation/MainToolbar';
import { NavigationBar } from './navigation/NavigationBar';


function App() {
  return (
    <div className="App">
      <ApplicationBar/>
      <NavigationBar />
      {/* <header className="App-header"> */}
    <h1>Testing Once again</h1>
    <Button color="primary" variant='contained'>Testing The Material Button</Button>
      {/* </header> */}
    </div>
  );
}

export default App;
