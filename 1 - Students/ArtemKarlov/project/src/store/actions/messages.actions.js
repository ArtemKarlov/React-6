import {RSAA, getJSON} from 'redux-api-middleware';

export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';

export const sendMessage = (id, sender, text, chatId) => ({
    type: SEND_MESSAGE,
    id,    
    sender,
    text,
    chatId,
});

export const GET_MESSAGES = '@@messages/GET_MESSAGES'

export const getMessages = (chatId) => ({
    type: GET_MESSAGES,
    chatId,
});

export const START_MESSAGES_LOADING = '@@contacts/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@contacts/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@contacts/ERROR_MESSAGES_LOADING';

export const loadMessages = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ data })),
            },
            ERROR_MESSAGES_LOADING,
        ],
    }
});