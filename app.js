var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
	secret: process.env.SESSION_KEY,
	resave: true,
	saveUninitialized: true,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

// app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter);

module.exports = app;