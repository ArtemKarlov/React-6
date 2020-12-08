import {RSAA, getJSON} from 'redux-api-middleware';
export const DEL_CONTACTLIST_ITEM = '@@contactList/DEL_CONTACTLIST_ITEM';
export const START_CONTACT_LIST_LOADING = '@@contactList/START_CONTACT_LIST_LOADING';
export const SUCCESS_CONTACT_LIST_LOADING = '@@contactList/SUCCESS_CONTACT_LIST_LOADING';
export const ERROR_CONTACT_LIST_LOADING = '@@contactList/ERROR_CONTACT_LIST_LOADING';



export const delContactListItem = (id) => ({
    type: DEL_CONTACTLIST_ITEM,
    id,
});

export const loadContactList = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_CONTACT_LIST_LOADING,
            {
                type: SUCCESS_CONTACT_LIST_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ data })),
            },
            ERROR_CONTACT_LIST_LOADING,
        ],
    }
});