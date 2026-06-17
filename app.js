const express = require('express');
const app = express();
const paymentRouter = require('./routes/payment');

app.use(express.json());
app.use('/api', paymentRouter);

module.exports = app;