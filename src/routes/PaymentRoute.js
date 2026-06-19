const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const paymentController = new PaymentController();
router.post('/pay', paymentController.createPayment);
module.exports = router