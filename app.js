const express = require('express');
const app = express();
const paymentRoute = require('./routes/payment');
app.use(express.json());
app.use('/api/payments', paymentRoute);
module.exports = app;