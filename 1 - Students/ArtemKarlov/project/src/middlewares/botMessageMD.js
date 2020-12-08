import {SEND_MESSAGE, sendMessage} from '../store/actions/messages.actions.js';
import {GET_MESSAGES, loadMessages} from '../store/actions/messages.actions.js';

export default (store) => (next) => (action) => {
    const botName = "bot-0";
    const botMessages = ['Wake up, Neo…', "The Matrix has you…", 'hey dude', 'Hasta la vista, baby'];

    switch (action.type) {
        case SEND_MESSAGE: {
            const {id, sender, text, chatId} = action;
            if ((chatId.includes('botChat')) && (!sender.includes('bot'))) {
                const idArr = action.id.split('-');
                idArr[1] = Number(idArr[1]);
                idArr[1]++;
                const msgId = idArr.join('-');

                let botMsgIndex = 1;
                switch (true) {
                    case text.includes('hello'):
                        botMsgIndex = 2;
                        break;
                    case text.includes('bye'):
                        botMsgIndex = 3;
                        break;                
                }
                
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId, botName, botMessages[botMsgIndex], chatId));                    
                }, 1000);
            } 
        }
        break;
        
        case GET_MESSAGES: {
            const {chatId} = action;

            if (chatId.includes('botChat')) {
                const allMsgsIdList = store.getState().messagesReducer.allMsgsIdList;
                const msgId = allMsgsIdList.length;
                
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId, botName, botMessages[0], chatId));                    
                }, 1000);
            } 
        }
        break; 
    }

    return next(action);
}
