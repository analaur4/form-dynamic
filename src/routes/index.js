import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../pages/createForm';
import ReadForm from '../pages/readForm';
import Answers from '../pages/answers';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/getform" component={ReadForm}/>
        <Route path="/answers" component={Answers}/>
    </Switch>
);

export default Routes
