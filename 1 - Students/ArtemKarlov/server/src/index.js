const express = require('express');
const fs = require('fs');

const account = require('./controllers/account.controller.js');
const chats = require('./controllers/chat.controller.js');
const contacts = require('./controllers/contacts.controller.js');
const messages = require('./controllers/messages.controller.js');

const server = express();
server.use(express.json());

// server.get('/chats', (req, res) => {
//     fs.readFile('./src/db/chats.json', 'utf-8', (e, data) => {
//         if(!e) {
//             res.json(JSON.parse(data));
//         }
//     });
// });

server.get('/:user', account.loadAccount.bind(account));
server.get('/contact/:contact', contacts.loadContact);
server.get('/chat/:chat', messages.loadMessages.bind(messages));
// server.get('/chats/:user', chats.loadChats);

server.listen(4000, () => {console.log('running at 4000')});

