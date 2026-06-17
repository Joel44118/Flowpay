const express = require('express');
const app = express();
const userRoute = require('./routes/user');

app.use('/users', userRoute);

module.exports = app;