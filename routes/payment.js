const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

router.post('/', PaymentController.processPayment);

module.exports = router;