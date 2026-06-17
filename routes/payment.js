const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');
const paymentController = new PaymentController();
router.post('/', (req, res) => paymentController.processPayment(req, res));
module.exports = router;