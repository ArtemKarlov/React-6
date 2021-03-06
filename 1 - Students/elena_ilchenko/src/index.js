import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './components/Router/Router';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { StylesProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import initStore, { history } from './store';


ReactDOM.render(
  <Provider store={ initStore() }>
      <StylesProvider>
        <ConnectedRouter history={ history }>
            <Router />
        </ConnectedRouter>
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
