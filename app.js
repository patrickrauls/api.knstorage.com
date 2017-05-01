require('dotenv').config();

//modules
const express = require('express'),
    path = require('path'),
    body_parser = require('body-parser');

//methods
const app = express(),
    json_parser = body_parser.json();

//routes
const route = require('./routes/index'),
    user = require('./routes/user');

//middleware
app.all('*', (req, res, next) => {
    return req.secure ? next() : res.redirect('https://' + req.hostname + req.url);
});
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);

//routing
// app.use(express.static(path.join(__dirname, '/public')));
app.use('/v1', route);

//export
module.exports = app;