const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('database error: ' + err);
});

const app = express();

const users = require('./routes/users');

const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('/games/digger', (req, res) => {
    res.sendFile(path.join(__dirname + '/games/digger/index.html'));
});

app.get('/games/asteroids', (req, res) => {
    res.sendFile(path.join(__dirname + '/games/asteroids/index.html'));
    //res.sendFile(path.join(__dirname + '/games/asteroids/' + req.params.FILE))
});

app.get('/docs/pixelplay', (req, res) => {
    res.sendFile(path.join(__dirname + '/docs/pixelplay.pdf'));
});

app.get('*', (req, res) => {
    res.send('Welcome the the API!');
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
