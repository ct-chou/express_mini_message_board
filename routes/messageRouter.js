const { Router } = require('express');
const {getMessageByIdHandler} = require('../controllers/messageController'); // Import the handler
const messageRouter = Router();


messageRouter.get('/:messageId', getMessageByIdHandler); // Use the handler for the route

module.exports = messageRouter;