import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jian from './images/jian.png';
import './components.css';

{/** The Home page of Webpage which contains all the About Me */}

class HomePage extends Component {
    render(){
        return(
            <div className="textBorder">
                <h3>Home/Landing Page!!</h3>

                <Grid>
                    <Cell className="resumeLeftSide" col={3}>
                        <div style={{textAlign:'center', padding: 15}}>
                            <img className="imageProfile" src={Jian} alt="Jian's Image" style={{width:'67%', borderRadius: '15px'}}/>
                        </div>

                        <h4>Jian Qi</h4>
                    </Cell>

                    <Cell className="resumeRightSide" col={9}>
                        <h4>About Me</h4>
                        <p>Recent Graduate</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default HomePage;