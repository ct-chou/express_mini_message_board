const { Router } = require('express');

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.send('Create a new message here!');
});

module.exports = newMessageRouter;
