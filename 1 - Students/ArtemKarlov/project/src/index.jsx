import React from 'react';
import ReactDom from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {initStore, history} from './store';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';

import Router from './router.jsx';


const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
    ,
    document.querySelector('#app')
);
