const express = require('express');
const app = express();
const PaymentRoute = require('./routes/PaymentRoute');
app.use('/api', PaymentRoute);
module.exports = app