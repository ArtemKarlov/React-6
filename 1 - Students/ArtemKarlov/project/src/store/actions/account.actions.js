import {RSAA, getJSON} from 'redux-api-middleware';

export const START_ACCOUNT_LOADING = '@@chats/START_ACCOUNT_LOADING';
export const SUCCESS_ACCOUNT_LOADING = '@@chats/SUCCESS_ACCOUNT_LOADING';
export const ERROR_ACCOUNT_LOADING = '@@chats/ERROR_ACCOUNT_LOADING';

export const loadAccount = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_ACCOUNT_LOADING,
            {
                type: SUCCESS_ACCOUNT_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ data })),
            },
            ERROR_ACCOUNT_LOADING,
        ],
    }
});