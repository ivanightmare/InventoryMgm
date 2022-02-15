const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })

);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());





