import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

import Footer from './footerBar';
import Button from '@material-ui/core/Button';


function App(){
  return(
      <div className="demo-big-content">
        <Layout>
            <Header title="Portfolio" scroll>
                <Navigation>
                    <Link to="/">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/skillsProjects">Skills & Projects</Link>
                    <Link to="/contacts">Contacts</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Skills</a>
                    <a href="#">Contacts</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
                
                {/*<Footer />*/}
            </Content>
        </Layout>
      </div>
  );
}

export default App;
