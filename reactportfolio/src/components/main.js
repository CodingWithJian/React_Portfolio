import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Resume from './resume';
import Contacts from './contacts';
import SkillsProjects from './skillsProjects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/skillsProjects" component={SkillsProjects} />
        <Route path="/contacts" component={Contacts} />
    </Switch>
)

export default Main;