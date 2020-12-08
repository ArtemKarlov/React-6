import './style.css';
import React from 'react';

export default function Message(props) {
    let {isSenderMe, message} = props;

    const messageClassNames = (isSenderMe) ?
    "chat-dialog__message chat-dialog__message_from_me": 
    "chat-dialog__message chat-dialog__message_from_opponent";
    

    return (
        <div className = { messageClassNames }>
            <p>{ message }</p>
        </div>

    );
}