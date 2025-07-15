const { Router } = require('express');
const messages = require('../data/db'); // Assuming messages is exported from db.js

const indexRouter = Router();




indexRouter.get('/', (req, res) => {
//   res.send('Welcome to the Mini Message Board!');
    res.render('index', { title: "Mini Message Board", messages: messages });
});


module.exports = indexRouter;