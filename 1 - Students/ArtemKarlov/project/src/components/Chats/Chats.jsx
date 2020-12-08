import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChat, loadChats, addBotChat} from '../../store/actions/chats.actions.js';
import {delContactListItem} from '../../store/actions/contactList.actions.js';


import ChatAdd from '../ChatAdd/ChatAdd.jsx';
import ChatList from '../ChatList/ChatList.jsx';


class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addChat = (contactId) => {
        const {allChatsIdList, account} = this.props;       

        if (contactId !== null) {      
            const chatId = `chat-${allChatsIdList.length+1}`; // наверно id лучше генерировать в middleware
            // const contacts = [account.id, contactId];

            this.props.addChat(chatId, contactId);
            this.props.delContactListItem(contactId);
        }
    }

    componentDidMount() { 
    }

    componentDidUpdate() {
        if (!this.props.isAccountLoading) {
            this.props.addBotChat();  
        }
    }

    render() {         
        const { chats } = this.props;
        const {contacts, contactList} = this.props;
        // const contactList = contacts.map((contact) => contact.name);
        return (
            <Fragment>
                <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        <ChatAdd contacts={contactList} getContactId={ this.addChat }/>
                    </div>
                    <ChatList chats={chats} />
                </section>                
            </Fragment>           
        );
    }
}

const mapStateToProps = ({chatsReducer, contactsReducer, accountReducer,contactListReducer}) => ({
    chats: chatsReducer.chats,
    allChatsIdList: chatsReducer.allChatsIdList,
    contacts: contactsReducer.contacts,
    account: accountReducer.account,
    isAccountLoading: accountReducer.isAccountLoading,
    contactList: contactListReducer.contactList,
});
const mapDispatchToProps = dispatch => bindActionCreators({addChat, loadChats, delContactListItem, addBotChat}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);