import update from 'react-addons-update';
import {DEL_CONTACT, SUCCESS_CONTACT_LOADING, START_CONTACT_LOADING, ERROR_CONTACT_LOADING} from '../actions/contacts.actions.js';
import {SUCCESS_ACCOUNT_LOADING} from '../actions/account.actions.js';


const initStore = {
    contacts: [
        // {
        //     id: "user-1",
        //     name: "John",
        //     middleName: "",
        //     surname: "Doe",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        //     email: "JohnDoe@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-2", "user-3", "user-4", "user-5", "user-6"],
        //     chats: ["chatBot-1"],
        // },
    ],
    isContactsLoading: false,
};

export default (store = initStore, action) => {
    switch(action.type) {

        case START_CONTACT_LOADING: {
            return update(store, {
                isContactsLoading: {$set: true}
            });
        }

        case SUCCESS_CONTACT_LOADING: {
            const newContact = action.payload.data;
            return update(store, {
                contacts: {
                    $push: [newContact]
                },
                isContactsLoading: {$set: false}
            });
        }

        case ERROR_CONTACT_LOADING: {
            return update(store, {
                isContactsLoading: {$set: false}
            });
        }

        case SUCCESS_ACCOUNT_LOADING: {
            return update(store, {
                contacts: {
                    $set: action.payload.data.contacts
                }
            });
        }

        case DEL_CONTACT: {
            const {id} = action;
            const delIndex = store.contacts.findIndex((contact) => contact.id === id);
            return update(store, {
                contacts: {
                    $splice: [[delIndex, 1]]
                }
            });
        }
        default:
            return store;
    }
}
