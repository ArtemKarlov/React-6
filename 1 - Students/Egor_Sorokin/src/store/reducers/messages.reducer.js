import update from 'react-addons-update'
import { SEND_MESSAGE } from "../actions/messages.actions.js";
import { MESSAGES_INIT } from "../actions/messages.actions.js";
import { MESSAGES_CLEAR } from "../actions/messages.actions.js";

const storeMessages = {
    conversations: {
        0: {
            userId: 0,
            messages: [{sender: 0, text: 'Hello'}, {sender: 0, text: 'How are you?'}]
        },
        1: {
            userId: 1,
            messages: [{sender: 1, text: 'Hello!'}]
        },
        2: {
            userId: 2,
            messages: [{sender: 2, text: 'Hello!'}]
        },
    },
}

export default (store = storeMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (typeof (Object.keys(store.conversations).find(item => action.chatId == item )) == 'undefined') {
                return update(store, {
                    conversations: { $merge: { [action.chatId]: {
                        userId: store.conversations[action.chatId].userId,
                        messages: [ {sender: action.sender, text: action.text} ]
                    } }}
                });
            } else {
                return update(store, {
                    conversations: { $merge: { [action.chatId]: {
                        userId: store.conversations[action.chatId].userId,
                        messages: [...store.conversations[action.chatId].messages, 
                        {sender: action.sender, text: action.text}
                    ]
                    } }}
                });
            }
        }
        case MESSAGES_INIT: {
            const chatId = Number(Object.keys(store.conversations)[Object.keys(store.conversations).length-1])+1;
            return update(store, {
                conversations: { $merge: { [chatId]: {
                    userId: action.userId,
                    messages: [],
                } }}
            });;
        }
        case MESSAGES_CLEAR: {
            store.conversations[action.id] = undefined;
            store.conversations = JSON.parse(JSON.stringify(store.conversations));
            return store;
        }
        default:
            return store;
    }
}