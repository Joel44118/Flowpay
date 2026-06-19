const Payment = require('../models/Payment');
class PaymentController {
  async createPayment(req, res) {
    const payment = new Payment(Math.floor(Math.random() * 100), req.body.amount, req.body.method);
    res.json(payment)
  }
}
module.exports = PaymentController