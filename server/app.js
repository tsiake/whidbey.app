var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

require('dotenv').config();

app.use(express.static('/etc/whidbey.io/client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'pug');

// sessions
app.set('trust proxy', 1);
//var sess = {
app.use(session({
	secret: 'xxxx',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: false, HttpOnly: false },
}));

var apiRouter = require('./routes/apiRouter.js');
var confLinkRouter = require('./routes/confLinkRouter.js');
var downloadsRouter = require('./routes/downloadsRouter.js');
var homeRouter = require('./routes/homeRouter.js');
app.use('/api', apiRouter);
app.use('', confLinkRouter);
app.use('/downloads', downloadsRouter);
app.use('*', homeRouter);


// for testing
// app.listen(9876, () => {
app.listen(process.env.APP_PORT, () => {
	console.log('Now listening on port: ' + process.env.APP_PORT);
});
