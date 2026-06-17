const Payment = require('../models/Payment');
class PaymentController {
  async createPayment(req, res) {
    const payment = new Payment(req.body.amount, req.body.method);
    res.send(payment);
  }
}
module.exports = PaymentController;