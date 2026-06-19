const request = require('supertest');
const app = require('./app');
describe('Payment endpoint', () => {
  it('should process payment', async () => {
    const response = await request(app).post('/payment/pay').send({ amount: 10.99, cardNumber: '1234-1234-1234-1234' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Payment of $10.99 processed for card 1234-1234-1234-1234');
  });
});