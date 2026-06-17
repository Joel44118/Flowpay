const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/payment', (req, res) => {
  const { amount, recipient } = req.body;
  // Process payment
  res.send(`Payment of $${amount} to ${recipient} successful`);
});
app.listen(port, () => {
  console.log(`FlowPay server listening on port ${port}`);
});