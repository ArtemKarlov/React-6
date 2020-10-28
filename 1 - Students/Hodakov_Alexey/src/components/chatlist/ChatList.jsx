import './style.css';
import React, { Component, Fragment } from 'react';
import ChatDialog from '../ChatDialog/ChatDialog.jsx';
import { Link } from 'react-router-dom';
import Avatar from './Avatar/Avatar.jsx'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
              
        }
    }
    
    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        let { chatsFromRedux, contactsFromRedux } = this.props;
        let chatsArr = chatsFromRedux.map(ch => <li key = { ch.id }>
                                            <Avatar text={ch.contact.slice(0,2)}></Avatar>
                                            <Link to = { `/chat/${ch.id}` }>{ch.contact}</Link>
                                        </li>)

        return (
            <Fragment>
                <div className="chat__list d-flex flex-column">
                    <div className="chat__list__contacts">
                        <ul>
                            { chatsArr }
                        </ul>
                    </div>
                        <div>
                            <ChatDialog contacts = { contactsFromRedux }/>
                        </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
    chatsFromRedux: chatsReducer.chats,
    contactsFromRedux: contactsReducer.contacts
});
const mapDispatchToProps = dispatch => bindActionCreators({ /*createChat*/ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);