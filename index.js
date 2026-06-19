const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/pay', (req, res) => {
  const { amount, cardNumber } = req.body;
  // Process payment
  res.send(`Payment of $${amount} processed for card ${cardNumber}`);
});
app.listen(port, () => {
  console.log(`FlowPay listening on port ${port}`);
});