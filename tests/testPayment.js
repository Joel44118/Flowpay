const Payment = require('../models/Payment');

describe('Payment', () => {
  it('should create a new payment', () => {
    const payment = new Payment(10, 'USD');
    expect(payment.amount).toBe(10);
    expect(payment.currency).toBe('USD');
  });
});