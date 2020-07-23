var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

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
var downloadsRouter = require('./routes/downloadsRouter.js');
var homeRouter = require('./routes/homeRouter.js');
app.use('/api', apiRouter);
app.use('/downloads', downloadsRouter);
app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('listening on 9876', "45.32.207.200");
});
