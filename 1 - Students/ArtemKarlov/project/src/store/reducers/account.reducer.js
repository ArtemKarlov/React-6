import update from 'react-addons-update';
import {START_ACCOUNT_LOADING, SUCCESS_ACCOUNT_LOADING, ERROR_ACCOUNT_LOADING} from '../actions/account.actions.js';

const initStore = {
    account: {
    //     id: "user-0",
    //     name: "Ivan",
    //     middleName: "Petrovich",
    //     surname: "Ivanov",
    //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
    //     email: "IvanIvanov@gmail.com",
    //     tel: "+79271234567",
    //     contacts: ["user-1", "user-2", "user-3", "user-4", "user-5", "user-6"],
    //     chats: ["chatBot-0"],
    },
    isAccountLoading: false,
};


export default (store = initStore, action) => {
    switch(action.type) {

        case START_ACCOUNT_LOADING: {
            return update(store, {
                isAccountLoading: {$set: true}
            });
        }

        case SUCCESS_ACCOUNT_LOADING: {
            return update(store, {
                account: {
                    $set: action.payload.data.account
                },
                isAccountLoading: {$set: false}
            });
        }

        case ERROR_ACCOUNT_LOADING: {
            return update(store, {
                isAccountLoading: {$set: false}
            });
        }

        default: 
            return store;
    }
}