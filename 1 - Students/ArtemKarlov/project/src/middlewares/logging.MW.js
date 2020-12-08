import {SUCCESS_ACCOUNT_LOADING} from '../store/actions/account.actions.js';
import {ADD_CHAT} from '../store/actions/chats.actions.js';
import {SEND_MESSAGE} from '../store/actions/messages.actions.js';
import {DEL_CONTACTLIST_ITEM} from '../store/actions/contactList.actions.js';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            // console.log(store.getState().contactsReducer.contacts);
            // console.log(store.getState().contactListReducer.contactList);
            console.log(store.getState().messagesReducer.messages);
            console.log(store.getState().chatsReducer.chats);
            // console.log(store.getState().chatsReducer.allChatsIdList); 
        }
        break;

        case SEND_MESSAGE: {
            // console.log(store.getState().contactsReducer.contacts);
            // console.log(store.getState().contactListReducer.contactList);
            console.log(store.getState().messagesReducer.messages);
            console.log(store.getState().chatsReducer.chats);
            // console.log(store.getState().chatsReducer.allChatsIdList); 
        }
        break;

        case SUCCESS_ACCOUNT_LOADING: {
            console.log(action.payload);
        }
        break;

        case DEL_CONTACTLIST_ITEM: {
            // console.log(action);
            // console.log(store.getState().contactsReducer.contacts);
        }

    }
    return next(action);
}
