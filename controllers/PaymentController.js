const Payment = require('../models/Payment');
class PaymentController {
  async processPayment(req, res) {
    try {
      const payment = new Payment(req.body.amount, req.body.cardNumber, req.body.expirationDate, req.body.cvv);
      // Process payment
      res.send(`Payment processed: $${payment.amount}`);
    } catch (error) {
      res.status(500).send('Error processing payment');
    }
  }
}
module.exports = PaymentController;