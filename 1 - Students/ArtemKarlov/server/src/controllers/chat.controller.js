const db = './src/db';
const fs = require('fs');

let mod = {
    async getChats(chatsId) {
        try {
            const chatsArray = chatsId.map((chatId) => {
                const chat = JSON.parse(fs.readFileSync(`${db}/chats/${chatId}.json`, 'utf-8'));
                return chat;
            });
            return chatsArray;
        } catch (error) {
            console.log(error);
            return false;  
        } 
    },

    async getChatAddList(contactsId, chats) {
        const chatsContactId = chats.map(chat => chat.contacts);
        const chatAddList = contactsId.filter(contactId => !chatsContactId.includes(contactId));
        return chatAddList;
    },

    async getChat(chatId) {
        return JSON.parse(fs.readFileSync(`${db}/chats/${chatId}.json`, 'utf-8'));
    },

    async getAllChatsIdList() {
        const chatsFilesList = fs.readdirSync(`${db}/chats`);
        const chatsIdList = chatsFilesList.map(chatsFile => {
            const chatId = (chatsFile.split('.'))[0];
            return chatId;
        });
        return chatsIdList;
    }
}

module.exports = mod;