import React from 'react';
import HeaderBar from './headerBar';
import Footer from './footerBar';
import Button from '@material-ui/core/Button';
import './App.css';
import Jian from './images/jian.png';


function App(){
  return(

    < >
      <HeaderBar />

      <div className="bodyItems"> {/*Start of Body Item className container*/}

        <div className="About">
          <h3>About</h3>
          <img className="jianImage" src={Jian} alt= "logo" />
          <p>
            Hi, My name is Jian Qi and I'm a recent graduate from San Francisco State University in a Bachelor's degree
            in Computer Science. I'm career goal is to become a Software Engineer.
          </p>
        </div>

        <div className="Projects">
          <h3>Projects</h3>
          <p>
            Hi, My name is Jian Qi and I'm a recent graduate from San Francisco State University in a Bachelor's degree
            in Computer Science. I'm career goal is to become a Software Engineer.
          </p>
        </div>

        <div className="Skills">
          <h3>Skills</h3>
          <p>
            Hi, My name is Jian Qi and I'm a recent graduate from San Francisco State University in a Bachelor's degree
            in Computer Science. I'm career goal is to become a Software Engineer.
          </p>
        </div>

        <div className="Contacts">
          <h3>Contacts</h3>
          <p>
            These are my contacts and the code of my projects I've worked on uploaded into my Github. I'm currently looking for future
            oppurtunites in Front-End, Back-End, and Full-Stack Software Engineering roles. Please don't hestitate to reach out and I
            look forward to connect.
          </p>
        </div> {/*End of Contacts*/}

        <div className="button-container">
          <div className="button-margin">
            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/jianxinqi/">Linkedin</Button>
          </div>

          <div className="button-margin">
            <Button variant="contained" color="primary" href="https://github.com/jianqi14">GitHub </Button>
          </div>

          <div className="button-margin">
            <Button variant="contained" color="primary" href="https://www.twitch.tv/jianqi15">Twitch</Button>
          </div>

          <div className="button-margin">
            <Button variant="contained" color="primary" href=" ">Resume</Button>
          </div>
        </div> {/*End of button-container*/}
      </div>{/*End of bodyItems*/}

      <Footer/>
    </>

  );
}

export default App;
