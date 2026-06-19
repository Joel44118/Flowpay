const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flowpay', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
