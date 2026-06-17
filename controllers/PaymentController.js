const Payment = require('../models/Payment');

class PaymentController {
  static processPayment(req, res) {
    const { amount, currency } = req.body;
    const payment = new Payment(amount, currency);
    // Process payment
    res.send(`Payment of ${payment.amount} ${payment.currency} processed`);
  }
}

module.exports = PaymentController;