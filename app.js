const express = require('express');
const app = express();
const paymentsRouter = require('./routes/payments');
app.use('/payments', paymentsRouter);
module.exports = app;