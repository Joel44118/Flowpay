const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/payment', (req, res) => {
  const { amount, currency } = req.body;
  // Process payment
  res.send(`Payment of ${amount} ${currency} processed`);
});

app.listen(port, () => {
  console.log(`FlowPay listening on port ${port}`);
});