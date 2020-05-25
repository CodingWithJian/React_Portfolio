import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import './footerBar.css';

function Footer() {
    return(
        <>
        <AppBar position="static">
            <div className="textFooter">
                <Typography variant="body1" color="inherit" align="center">
                    {'Coded + Designed by Jian Qi'}
                </Typography>

                <Typography variant="body1" color="inherit" align="center">
                    {'© 2020 Jian Qi'}
                </Typography>
            </div>
        </AppBar>

        </>
    );
}

export default Footer;

