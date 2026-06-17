const express = require('express');
const app = express();
const paymentRouter = require('./routes/payment');

app.use('/payment', paymentRouter);

module.exports = app;