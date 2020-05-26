import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homePage';
import Contacts from './contacts';
import SkillsProjects from './skillsProjects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/skillsProjects" component={SkillsProjects} />
        <Route path="/contacts" component={Contacts} />
    </Switch>
)

export default Main;