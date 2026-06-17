const request = require('supertest');
const app = require('./app');

describe('Payment API', () => {
  it('should create a new payment', async () => {
    const response = await request(app).post('/api/payment').send({ amount: 10, currency: 'USD' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});