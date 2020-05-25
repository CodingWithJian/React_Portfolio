import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Jian from './images/jian.png';

class Resume extends Component {
    render(){
        return(
            <div className="textBorder">
                <h3>Resume</h3>
                <Grid>

                    <Cell className="resumeLeftSide"col={4}>
                        <p>Left Side</p>
                        <img className="imageProfile" src={Jian} alt=""/>
                    </Cell>

                    <Cell className="resumeRightSide" col={8}>
                        Right Side
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;