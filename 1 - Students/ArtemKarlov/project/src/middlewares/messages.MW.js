import {GET_MESSAGES, loadMessages} from '../store/actions/messages.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case GET_MESSAGES: {
            const {chatId} = action;
            const storeMessages = store.getState().messagesReducer.messages;
            const storeChats = store.getState().chatsReducer.chats;
            const checkedChat = storeChats.find(chat => chat.id === chatId);
            const checkedChatMsgs = checkedChat.messages;
            if (checkedChatMsgs.length != 0) {
                const findedCheckedChatMs = storeMessages.find(storMsg => checkedChatMsgs.includes(storMsg.id));
                if (findedCheckedChatMs === undefined) {
                    return store.dispatch(loadMessages(`/api/chat/${chatId}`));
                }
            }

            // const {contacts: contactId} = action;
            // const storeContacts = store.getState().contactsReducer.contacts;
            // const findedStoreContact = storeContacts.find(contact => contact.id === contactId);
            // if (findedStoreContact === undefined) {
            //     store.dispatch(loadContact(`/api/contact/${contactId}`));
            // }
        } 
    }
    return next(action);

}