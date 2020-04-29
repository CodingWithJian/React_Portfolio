import React from 'react';
import HeaderBar from './headerBar';
import Button from '@material-ui/core/Button';
import './App.css';

function App(){
  return(

    < >
      <HeaderBar />

      <div className="edge-margin">
        <Button variant="contained" color="primary" href="https://www.linkedin.com/in/jianxinqi/"> Jian's Linkedin </Button>
        <Button variant="contained" color="primary" href="https://github.com/jianqi14"> Jian's GitHub </Button>
      </div>

    </>

  );
}

export default App;






/**
    import logo from './logo.svg';
    import './App.css';

    <div className="App">
      <header className="App-header">

        <h2>Jian Qi's Portfolio in React!!</h2>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */