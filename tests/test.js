const Payment = require('../models/Payment');
describe('Payment model', () => {
  it('should create a new payment', () => {
    const payment = new Payment(10.99, 'John Doe');
    expect(payment.amount).toBe(10.99);
    expect(payment.recipient).toBe('John Doe');
  });
});