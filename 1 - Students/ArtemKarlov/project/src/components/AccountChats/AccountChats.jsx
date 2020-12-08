import './style.css';
import React, { Fragment } from 'react';

import Account from '../Account/Account.jsx';
import Chats from '../Chats/Chats.jsx';


export default (props) => {
    const {account} = props;
    return (
        <Fragment>
            <div className="layout__account-chatlist">
                <Account userName={account.name} avatarUrl={account.avatarUrl} />
                <Chats contacts={account.contacts} />                
            </div>
        </Fragment>
    );
}
