const { Router } = require('express');

const messages = require('../data/db'); // Assuming messages is exported from db.js
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
//   res.send('Create a new message here!');
    res.render('forms', { title: "Enter New Message" });
});

newMessageRouter.post('/', (req, res) => {
    console.log('req.body:', req.body);  
    // Assuming the form has fields named 'message' and 'user'
    const messageText = req.body.message;
    const userName = req.body.user;
    const newMessage = {
        text: messageText,
        user: userName,
        added: new Date()
    };
    messages.push(newMessage);
    res.redirect('/');
}); 

module.exports = newMessageRouter;
