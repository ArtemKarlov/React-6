import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import chatsReducer from './chats.reducer.js';
import messagesReducer from './messages.reducer.js';
import contactsReducer from './contacts.reducer.js';
import accountReducer from './account.reducer.js';
import contactListReducer from './contactList.reducer.js';


export default (history) => combineReducers({
    router: connectRouter(history),
    chatsReducer,
    messagesReducer,
    contactsReducer,
    contactListReducer,
    accountReducer,    
});