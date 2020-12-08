import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messages.actions.js';
import {SUCCESS_MESSAGES_LOADING} from '../actions/messages.actions.js';
import {SUCCESS_ACCOUNT_LOADING} from '../actions/account.actions.js';

const initStore = {
    messages: [
        // {id: 'msg-0', sender: 'Bot', text: 'Wake up, Neo…'},
        // {id: 'msg-1', sender: 'Bot', text: 'Follow the white rabbit.'},
    ],
    allMsgsIdList: [],
    isMessagesLoading: false,
}

export default (store = initStore, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            const {id, sender, text} = action;
            const newMsg = {id, sender, text};
            return update(store, {
                messages: {
                    $push: [newMsg]
                },
                allMsgsIdList: {
                    $push: [id]
                }
            });
        }

        case SUCCESS_MESSAGES_LOADING: {
            const messages = action.payload.data
            return update(store, {
                messages: {
                    $push: [...messages]
                } 
            });
        }

        case SUCCESS_ACCOUNT_LOADING: {
            return update(store, {
                allMsgsIdList: {
                    $set: action.payload.data.allMsgsIdList
                }
            });
        }


        default:
            return store;
    }
}