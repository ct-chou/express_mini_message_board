const {messages, getMessageById} = require('../data/db'); // Assuming messages is exported from db.js
const CustomNotFoundError = require('../errors/CustomNotFoundError'); // Import the custom error

async function getMessageByIdHandler(req, res) {
    const { messageId } = req.params;
    const message = await getMessageById(parseInt(messageId, 10));
    
    if (!message) {
        throw new CustomNotFoundError(`Message with ID ${messageId} not found`);
    } else {
        res.render('message', { title: "Message Details", message: message });
    }
}

module.exports = { getMessageByIdHandler };