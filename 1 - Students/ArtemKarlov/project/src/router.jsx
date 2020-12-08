import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/chat/:chatId" component={Layout} />
        </Switch>
    );
}
