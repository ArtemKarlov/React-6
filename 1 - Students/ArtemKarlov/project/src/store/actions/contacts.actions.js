import {RSAA, getJSON} from 'redux-api-middleware';

export const DEL_CONTACT = '@@contacts/DEL_CONTACT';

export const delContact = (id) => ({
    type: DEL_CONTACT,
    id,
});


export const START_CONTACT_LOADING = '@@contacts/START_CONTACT_LOADING';
export const SUCCESS_CONTACT_LOADING = '@@contacts/SUCCESS_CONTACT_LOADING';
export const ERROR_CONTACT_LOADING = '@@contacts/ERROR_CONTACT_LOADING';

export const loadContact = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_CONTACT_LOADING,
            {
                type: SUCCESS_CONTACT_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ data })),
            },
            ERROR_CONTACT_LOADING,
        ],
    }
});