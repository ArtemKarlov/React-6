const db = './src/db';
const fs = require('fs');

const {getChat} = require('./chat.controller.js');

module.exports = {
    async loadMessages(req, res) {
        try {
            const chatId = req.params.chat;
            const chat = await getChat(chatId);
            const messages = await this.getMessages(chat.messages);    
            res.json(messages); 
        } catch (error) {
            console.log(error);
        }
    },

    async getMessages(messagesId) {
        const msgsAll = JSON.parse(fs.readFileSync(`${db}/messages/msg.all.json`, 'utf-8'));
        const messages = msgsAll.filter((msg) => messagesId.includes(msg.id));
        return messages;
    },

    async getAllMsgsIdList() {
        const msgsAll = JSON.parse(fs.readFileSync(`${db}/messages/msg.all.json`, 'utf-8'));
        const allMsgsIdList = msgsAll.map(msg => msg.id);
        return allMsgsIdList;
    }
};