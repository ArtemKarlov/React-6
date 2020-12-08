import {RSAA, getJSON} from 'redux-api-middleware';

export const ADD_CHAT = '@@chats/ADD_CHAT';

export const addChat = (id, contacts) => ({
    type: ADD_CHAT,
    id,
    contacts,
});

export const ADD_BOT_CHAT = '@@chats/ADD_BOT_CHAT';
export const addBotChat = () => ({
    type: ADD_BOT_CHAT,
});

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING';

export const loadChats = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data })),
            },
            ERROR_CHATS_LOADING,
        ],
    }
});