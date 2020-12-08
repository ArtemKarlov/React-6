import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Messages from '../Messages/Messages.jsx';
import ChatDialogInfo from '../ChatDialogInfo/ChatDialogInfo.jsx';


function ChatDailog(props) {
    const {chatId, chats, contacts} = props;
    const currentChat = chats.find((chat) => chat.id === chatId);

    // let chatContact = contacts.find((cont) => cont.id === currentChat.contacts);
    // chatContact = (chatContact === undefined) ? {name: 'UNKNOWN', middleName: '', surname: '', avatarUrl: '', } : chatContact;
 
    let chatContact = (currentChat.contacts.includes('bot')) ?
    {name: 'BOT', middleName: '', surname: '', avatarUrl: '', } :    
    contacts.find((cont) => cont.id === currentChat.contacts);
     
    return (
        <Fragment>
            <ChatDialogInfo chatContact={chatContact} /> 
            <Messages currentChat={currentChat} />            
        </Fragment>
    );
}

const mapStateToProps = ({chatsReducer, contactsReducer}) => ({
    chats: chatsReducer.chats,
    contacts: contactsReducer.contacts,
});
export default connect(mapStateToProps)(ChatDailog);
