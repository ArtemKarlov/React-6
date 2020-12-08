import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2.js';
import initialReducers from './reducers';
import middlewares from '../middlewares/';

const persistConfig = {
    key: 'chatPersist',
    storage,
    stateReconciler: autoMergeLevel2,
    // whitelist: ['chatsReducer', 'messagesReducer', 'contactsReducer']
    whitelist: []
};

export const history = createBrowserHistory();

export function initStore() {
    const initialStore = {};
    const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
    
    const store =  createStore(
        persistReducer(persistConfig, initialReducers(history)), 
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            reduxDevTool
        )
    );
    const persistor = persistStore(store);

    return {store, persistor};
}
