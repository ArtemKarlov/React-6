import {apiMiddleware} from 'redux-api-middleware';
import botMessageMD from './botMessageMD.js';
import contacts from './contacts.MW.js';
import messages from './messages.MW.js';
import logging from './logging.MW.js';
import chatBot from './chats.MW.js';


export default [
    apiMiddleware,
    botMessageMD,
    contacts,
    messages,
    chatBot,
    logging,
];