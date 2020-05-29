import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render() {
    
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
          <Typography variant="h5" color="inherit" align="center">
            {'Coded + Designed by Jian Qi'}
          </Typography>

          <Typography variant="h5" color="inherit" align="center">
            {'© 2020 Jian Qi'}
          </Typography>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
