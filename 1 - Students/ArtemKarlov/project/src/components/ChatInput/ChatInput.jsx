import './style.css';
import React from 'react';

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }    

    handleChangeText = (event) => {
        let inputText = event.target.value;
        this.setState({text: inputText});
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.send();
        }
    }

    handleClick = () => {
        this.send();
    }

    send = () => {
        let {text} = this.state;
        this.props.getMessage(text);
        this.setState({text: ''});
    }   
    

    render() {
        let {text} = this.state;
        return (
            <div className="chat__input chat-input">
                <input type="text" value = { text } onChange = { this.handleChangeText } onKeyUp = {this.handleKeyUp} className="chat-input__input" placeholder="Write here..."/>
                <button onClick = { this.handleClick } className="chat-input__button button-shell"><img src="../src/layout/images/Vector.png" alt="" className="button-shell__img"/></button>
            </div>
        );
    }
}