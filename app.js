var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser({
// 	maxAge: 24 * 60 * 60 * 1000
// }));
// var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
var expiryDate = new Date(Date.now() + 5000); // 5 sec
app.use(session({
	name: 'WebCarWashSess',
	secret: process.env.SESSION_KEY,
	resave: true,
	saveUninitialized: true,
	expires: expiryDate,
  // duration: 10000, //30 * 60 * 1000,
  // activeDuration: 5000
}));

// app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter);

module.exports = app;