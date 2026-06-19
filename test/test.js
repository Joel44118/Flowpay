const assert = require('assert');
const Payment = require('../src/models/Payment');
describe('Payment model', () => {
  it('should create a payment', () => {
    const payment = new Payment(1, 10, 'credit');
    assert.equal(payment.id, 1);
    assert.equal(payment.amount, 10);
    assert.equal(payment.method, 'credit');
  })
})