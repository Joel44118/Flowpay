const Payment = require('../models/Payment');
class PaymentController {
  async processPayment(req, res) {
    try {
      const payment = new Payment(req.body.amount, req.body.recipient);
      // Save payment to database
      res.send(`Payment of $${payment.amount} to ${payment.recipient} successful`);
    } catch (error) {
      res.status(500).send('Error processing payment');
    }
  }
}
module.exports = PaymentController;