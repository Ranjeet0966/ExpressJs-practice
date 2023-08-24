// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const messagesPath = path.join(__dirname, 'messages.json');

app.post('/login',  (req, res) => {
    const { username } = req.body;
    res.cookie('username', username);
    res.redirect('/');
});

app.post('/send', (req, res) => {
    const { username } = req.cookies;
    const { message } = req.body;

    const newMessage = { username, message };
    const messages =  loadMessages();
    messages.push(newMessage);
   saveMessages(messages);

    res.send('Message sent successfully.');
});

async function loadMessages() {
    try {
        const content = await fs.readFile(messagesPath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        return [];
    }
}

async function saveMessages(messages) {
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));
}

app.listen(5501, () => {
    console.log('Server is running on port 3000');
});
