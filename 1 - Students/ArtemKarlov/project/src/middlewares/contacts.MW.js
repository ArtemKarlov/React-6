import {ADD_CHAT} from '../store/actions/chats.actions.js';
import {loadContact} from '../store/actions/contacts.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const {contacts: contactId} = action;
            const prefixContactId = contactId.split('-')[0];
            if (prefixContactId !== 'bot') {
                const storeContacts = store.getState().contactsReducer.contacts;
                const findedStoreContact = storeContacts.find(contact => contact.id === contactId);
                if (findedStoreContact === undefined) {
                    store.dispatch(loadContact(`/api/contact/${contactId}`));
                }
            }            
        } 
    }
    return next(action);
}