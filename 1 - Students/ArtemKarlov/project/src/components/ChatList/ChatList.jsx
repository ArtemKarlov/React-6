import './style.css';

import React, { Fragment } from 'react';
import List from '@material-ui/core/List';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {loadMessages, getMessages} from '../../store/actions/messages.actions.js';


import ChatListItem from '../ChatListItem/ChatListItem.jsx';


function ChatList(props) {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleChatListItemClick = (chatId) => {
        setSelectedIndex(chatId);
        props.push(`/chat/${chatId}`);
        // props.loadMessages(`/api/chat/${chatId}`);
        props.getMessages(chatId);
    };
         
    const { chats } = props;
    
    const chatList = chats.map((chat) => 
        <ChatListItem key={chat.id} selectedIndex={selectedIndex} chat={chat} onClick={handleChatListItemClick}/>
    );
    
    return (
        <Fragment>
            <div className="chats__chats-list chats-list">
                <List component="nav" aria-label="main mailbox folders">
                    { chatList }
                </List>
            </div>
        </Fragment>        
    );
}


const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({push, loadMessages, getMessages}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);