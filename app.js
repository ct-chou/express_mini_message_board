const express = require('express');
const app = express();
const path = require('node:path');   

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const messageRouter = require('./routes/messageRouter'); // Import the message router

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/messages', messageRouter); // Use the message router for /messages

app.use((req, res, next) => {
    res.status(404).render('404', { 
        title: 'Page Not Found',
        message: `Sorry, the page ${req.url} doesn't exist.`
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message || 'Internal Server Error');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
