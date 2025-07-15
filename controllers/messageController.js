const {messages, getMessageById} = require('../data/db'); // Assuming messages is exported from db.js

async function getMessageByIdHandler(req, res) {
    const { messageId } = req.params;
    const message = await getMessageById(parseInt(messageId, 10));
    
    if (message) {
        res.render('message', { title: "Message Details", message: message });
        // res.send(message);
    } else {
        res.status(404).send('Message not found');
    }
}

module.exports = { getMessageByIdHandler };