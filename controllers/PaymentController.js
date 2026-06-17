const Payment = require('../models/Payment');
class PaymentController {
  async createPayment(req, res) {
    const payment = new Payment(req.body.id, req.body.amount, req.body.recipient);
    res.send(payment);
  }
}
module.exports = PaymentController;