import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';

import ChatPlaceHolder from '../ChatPlaceHolder/ChatPlaceHolder.jsx';
import ChatDailog from '../ChatDialog/ChatDialog.jsx';

export default function ChatField(props) {
    const {chatId} = props;    
    
    return (
        <section className="lyaout__chat chat">
            {(chatId === 'init') ?
                <ChatPlaceHolder /> : 
                <ChatDailog chatId={chatId} />
            }         
        </section>
    );
}

// const mapStateToProps = ({chatsReducer}) => ({
//     chats: chatsReducer.chats,
// });
// export default connect(mapStateToProps)(ChatField);
