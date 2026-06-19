const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/pay', (req, res) => {
  const { amount, cardNumber, expirationDate, cvv } = req.body;
  // Process payment
  res.send(`Payment processed: $${amount}`);
});
app.listen(port, () => {
  console.log(`FlowPay listening on port ${port}`);
});