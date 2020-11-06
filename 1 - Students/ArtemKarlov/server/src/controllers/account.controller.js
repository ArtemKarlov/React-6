const db = './src/db';
const fs = require('fs');

const {getChats, getChatAddList} = require('./chat.controller.js');
const {getContacts, getContactList} = require('./contacts.controller.js');


let mod = {
    async loadAccount(req, res) {
        try {
            const userId = req.params.user;
            const account = await this.getAccount(userId);
            const chats = await getChats(account.chats);
            const contacts = await getContacts(chats);
            const chatAddList = await getChatAddList(account.contacts, chats);
            const chatAddContactList = await getContactList(chatAddList);

            const result = {
                account, chats, contacts, chatAddContactList
            };

            setTimeout(() => res.json(result), 2000);

            // res.json(result);
        } catch (error) {
            console.log(error);
            return false;
        }                 
    },
    async getAccount(userId) {
        try {
            const account = JSON.parse(fs.readFileSync(`${db}/users/${userId}.json`, 'utf-8'));
            return account;
        } catch (error) {
            console.log(error);
            return false;
        }        
    }
}

module.exports = mod;