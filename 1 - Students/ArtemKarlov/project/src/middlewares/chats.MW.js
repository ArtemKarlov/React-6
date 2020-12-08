import {addChat, ADD_BOT_CHAT} from '../store/actions/chats.actions.js';
import {SUCCESS_ACCOUNT_LOADING} from '../store/actions/account.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case ADD_BOT_CHAT: {
            const account = store.getState().accountReducer.account;
            const allChatsIdList = store.getState().chatsReducer.allChatsIdList;
            const accountIdArr =  account.id.split('-');
            const idNumber = Number(accountIdArr[1]);
            const botchatId = `botChat-${idNumber}`;
            const botcontactId = `bot-${idNumber}`;

            if (!allChatsIdList.includes(botchatId)) {
                return store.dispatch(addChat(botchatId, botcontactId));
            }
           
            
        } 
    }
    return next(action);
}