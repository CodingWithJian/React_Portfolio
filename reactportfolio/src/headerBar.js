import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import './headerBar.css';

function HeaderBar(){
  return(
    < >
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start"color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Button color="inherit">Portfolio</Button>

      <div className="groupHeaderLinks">
        <Button color="inherit" href="#About"> About </Button>
        <Button color="inherit" href="#Projects"> Projects </Button>
        <Button color="inherit" href="#Skills"> Skills </Button> 
        <Button color="inherit" href="#Contacts"> Contacts</Button>
      </div>
      
    </Toolbar>
    </AppBar>

  </>
  );
}

export default HeaderBar;