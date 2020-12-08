const db = './src/db';
const fs = require('fs');

const {getChats, getChatAddList, getAllChatsIdList} = require('./chat.controller.js');
const {getContacts, getContactList} = require('./contacts.controller.js');
const {getAllMsgsIdList} = require('./messages.controller.js');


let mod = {
    async loadAccount(req, res) {
        try {
            const userId = req.params.user;
            const account = await this.getAccount(userId);
            const chats = await getChats(account.chats);
            const contacts = await getContacts(chats);
            const chatAddList = await getChatAddList(account.contacts, chats);
            const chatAddContactList = await getContactList(chatAddList);
            const allChatsIdList = await getAllChatsIdList();
            const allMsgsIdList = await getAllMsgsIdList();

            const result = {
                account, chats, contacts, chatAddContactList, allChatsIdList, allMsgsIdList,
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